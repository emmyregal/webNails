'use client'

import React, { Fragment, useMemo, useEffect, useState, useRef, useCallback } from 'react'
import { Calendar, dayjsLocalizer, View, Views } from 'react-big-calendar'
import dayjs from 'dayjs'
import { getAppts } from '../components/db-calls';
import { minTime, maxTime } from '../components/date-time-picker';


const localizer = dayjsLocalizer(dayjs)

export type CalendarEvent = {
  id: number
  title: string
  start: Date
  end: Date
}

export default function MyCalendar({bgEvent}: {bgEvent: CalendarEvent[]}) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [date, setDate] = useState<Date>(new Date(Date.now()))
  const [view, setView] = useState<View>(Views.WEEK)

  const onView = useCallback((newView: View) => setView(newView), [setView])
  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate])

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAppts()
      setEvents(data)
    }

    fetchEvents()
  }, [])

  const { views } = useMemo(
    () => ({
      views: [Views.MONTH, Views.WEEK, Views.DAY],
    }),
    []
  )

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
        max={new Date(2000, 0, 0, maxTime.hour())}

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