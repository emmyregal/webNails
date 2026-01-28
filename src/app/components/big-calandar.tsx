'use client'

import React, { Fragment, useMemo, useEffect, useState, useRef, useCallback } from 'react'
import { Calendar, dayjsLocalizer, View, Views } from 'react-big-calendar'
import dayjs from 'dayjs'
import { getEvents } from '../components/db-calls';
import { minTime, maxTime } from '../components/date-time-picker';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';


const localizer = dayjsLocalizer(dayjs)

export type CalendarEvent = {
  id: number
  title: string
  start: Date
  end: Date
}

export default function MyCalendar({ bgEvent }: { bgEvent: CalendarEvent[] }) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [date, setDate] = useState<Date>(new Date(Date.now()))
  const [view, setView] = useState<View>(Views.WEEK)
  const [loading, setLoading] = useState(false);

  const onView = useCallback((newView: View) => setView(newView), [setView])
  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate])

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        const data = await getEvents()
        setEvents(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }

    }

    fetchEvents()
  }, [])

  const { views } = useMemo(
    () => ({
      views: [Views.MONTH, Views.WEEK, Views.DAY],
    }),
    []
  )

  if (loading) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center', 
        height: '100%',       
        justifyContent: 'center'
      }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 575 }}
        backgroundEvents={bgEvent}

        min={new Date(2000, 0, 0, minTime.hour())}
        max={new Date(2000, 0, 0, maxTime.hour() + 2)}

        views={views}
        onView={onView}
        view={view}

        onNavigate={onNavigate}
        date={date}

        // disables clicking on appointments: 
        eventPropGetter={() => ({
          style: {
            pointerEvents: 'none',
          },
        })}
      />
    </div>
  )
}