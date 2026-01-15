"use client";

// import { useSearchParams } from "next/navigation";

export default function Page() {
//   const searchParams = useSearchParams();
//   const apptId = searchParams.get("appointment");

  return (<div>Appointment ID: </div>);
}

// // import { Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// // import AppointmentView from "@/app/components/AppointmentView";

// export default function Page() {
//   const [apptId, setApptId] = useState<string | null>(null);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     setApptId(params.get("appointment"));
//   }, []);
// //   if (apptId == null) {
// //     return (
// //         <Typography>
// //             Error loading appt.
// //         </Typography>
// //     )
// //   }

// //   return <AppointmentView appt_id={apptId}/>
// }
