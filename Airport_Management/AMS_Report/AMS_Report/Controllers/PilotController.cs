using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AMS_Report.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AMS_Report.Controllers
{
    [EnableCors("AMSPolicy")]

    [Route("api/[controller]")]
    [ApiController]
    public class PilotController : ControllerBase
    {
        TestContext ams_report = new TestContext();

        //Get: To view pilot details
        [Route("GetPilot")]
        [HttpGet]
        public IActionResult GetPilot()
        {

            var returnList = from i in ams_report.AmsPilot.Where(e => e.Status == false)
                             select new
                             {
                                 i.LicenseNumber,
                                 i.PilotId,
                                 i.City,
                                 i.State


                             };

            return Ok(returnList);

        }

        //getting the all scheduled pilot list in admin
       [Route("GetScheduledPilot")]
       [HttpGet]
        public IActionResult GetScheduledPilot()
        {

            var returnList = from i in ams_report.AmsPilot.Where(e => e.Status == true && e.ScheduleStatus == false)
                             select new
                             {
                                 i.PilotId,
                                 i.LicenseNumber

                             };

            return Ok(returnList);

        }


        //post:Registration request for pilot

        [Route("PostPilotReg")]
        [HttpPost]
        public IActionResult PostPilotReg([FromBody] AmsPilot PilotId)
        {
            AmsPilot ams_Pilot = new AmsPilot();
            ams_Pilot.LicenseNumber = PilotId.LicenseNumber;
            ams_Pilot.AddressLine1 = PilotId.AddressLine1;
            ams_Pilot.AddressLine2 = PilotId.AddressLine2;
            ams_Pilot.City = PilotId.City;
            ams_Pilot.State = PilotId.State;
            ams_Pilot.ZipCode = PilotId.ZipCode;
            ams_Pilot.Ssn = PilotId.Ssn;
            ams_Pilot.Password = PilotId.Password;
            ams_Pilot.Status = false;
            ams_Pilot.ScheduleStatus = false;

            ams_report.AmsPilot.Add(ams_Pilot);
            ams_report.SaveChanges();
            return Ok("registration successful");
        }

        //Get:login
        [Route("PostPilotLogin")]
        [HttpPost]

        public IActionResult PostPilotLogin(long pilotId, [FromBody] AmsPilotCredentials pilot)
        {
            var user = ams_report.AmsPilot.Where(p => p.LicenseNumber == pilot.LicenseNumber && p.Password == pilot.Password && p.Status == true).FirstOrDefault();
            if(user==null)
            {
                return Ok(new { status = "No Match" });
            }
            else if (user.RejectionBit == true)
            {
                return Ok(new { status = "Admin Disapproved", comment = user.RejectionStatus });
            }

            else if (user != null)
            {
                return Ok(new { status = "Matched", User = user });
            }

            else
            {
                return Ok(new { status = "No Match" });
            }

        }
        //Get : view WorkSchedule
        [Route("GetWorkSchedule/{licenseno}")]
        [HttpPost]
        public IActionResult GetWorkSchedule(string licenseno)
        {
            return Ok(ams_report.AmsWorkSchedule.Where(plane => plane.Pilot.LicenseNumber == licenseno).FirstOrDefault());
        }
        //Get: To view flight plan details
        [Route("GetFlightPlan")]
        [HttpGet]
        public IActionResult GetFlightPlan()
        {

            return Ok(ams_report.AmsFlightPlan);

        }

        //Get: To view flight plan details which are alloted
        [Route("GetFlightPlanAllotedHanger")]
        [HttpGet]
        public IActionResult GetFlightPlanAllotedHanger()
        {

            return Ok(ams_report.AmsPlane.Where(p => p.HangerStatus == "Allotted"));

        }

        //Put: update flight plan
        [Route("PutFlightPlan/{flightId}")]
        [HttpPut("{flightId}")]
        public ActionResult PutFlightPlan(long flightId, [FromBody] AmsFlightPlan flightPlan)
        {
            AmsFlightPlan ams_flight_plan = ams_report.AmsFlightPlan.Where(p => p.FlightId == flightId).FirstOrDefault();
            ams_flight_plan.DepartureLocation = flightPlan.DepartureLocation;
            ams_flight_plan.Waypoints = flightPlan.Waypoints;
            ams_flight_plan.EstimatedTimeOfArrival = flightPlan.EstimatedTimeOfArrival;
            ams_flight_plan.DestinationLocation = flightPlan.DestinationLocation;
            ams_flight_plan.AlternateAirports = flightPlan.AlternateAirports;
            ams_flight_plan.AircraftInformation = flightPlan.AircraftInformation;
            ams_flight_plan.PilotsInformation = flightPlan.PilotsInformation;
            ams_flight_plan.Status = flightPlan.Status;

            ams_report.SaveChanges();
            return Ok("Updated");
        }
        //Post: Post Flight Plan
        [Route("PostFlightPlan")]
        [HttpPost]
        public IActionResult PostFlightPlan([FromBody] AmsFlightPlan flightPlan)
        {
            AmsFlightPlan ams_flight_plan = new AmsFlightPlan();
            ams_flight_plan.FlightId = flightPlan.FlightId;
            ams_flight_plan.DepartureLocation = flightPlan.DepartureLocation;
            ams_flight_plan.Waypoints = flightPlan.Waypoints;
            ams_flight_plan.EstimatedTimeOfArrival = flightPlan.EstimatedTimeOfArrival;
            ams_flight_plan.DestinationLocation = flightPlan.DestinationLocation;
            ams_flight_plan.AlternateAirports = flightPlan.AlternateAirports;
            ams_flight_plan.AircraftInformation = flightPlan.AircraftInformation;
            ams_flight_plan.PilotsInformation = flightPlan.PilotsInformation;
            ams_flight_plan.Status = false;
            ams_report.AmsFlightPlan.Add(ams_flight_plan);
            ams_report.SaveChanges();
            //ams_report.AmsFlightPlan.Add(flightPlan);
            //ams_report.SaveChanges();

            return Ok("Flight plan updated");
        }
    }
}