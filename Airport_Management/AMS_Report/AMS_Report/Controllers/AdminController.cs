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
    public class AdminController : ControllerBase
    {




        TestContext AMS1 = new TestContext();

        //Get : view,approve or deny manager registration request
        [Route("GetManager")]
        [HttpGet]
        public IActionResult GetManager()
        {
            return Ok(AMS1.AmsManager);
        }

        //Get : view,approve or deny pilot registration request
        [Route("GetPilot")]
        [HttpGet]
        public IActionResult GetPilot()
        {
            return Ok(AMS1.AmsPilot);
        }

        //Get : view, approve or deny planes availability request
        [Route("GetPlane")]
        [HttpGet]
        public IActionResult GetPlane()
        {
            return Ok(AMS1.AmsPlane);
        }

        //Get Plane By ID
        [Route("GetPlaneID/{planeId}")]
        [HttpGet("planeId")]
        public IActionResult GetPlane(int planeId)
        {
            return Ok(AMS1.AmsPlane.Where(plane => plane.PlaneId == planeId).FirstOrDefault());
        }



        [Route("PostAdminReg")]
        [HttpPost]
        public IActionResult PostAdminReg([FromBody] AmsAdmin adminId)
        {
            AmsAdmin ams_Admin = new AmsAdmin();

            ams_Admin.FirstName = adminId.FirstName;
            ams_Admin.LastName = adminId.LastName;
            ams_Admin.Age = adminId.Age;
            ams_Admin.Gender = adminId.Gender;
            ams_Admin.DoB = adminId.DoB;
            ams_Admin.ContactNumber = adminId.ContactNumber;
            ams_Admin.AltContactNumber = adminId.AltContactNumber;
            ams_Admin.EmailId = adminId.EmailId;
            ams_Admin.Password = adminId.Password;
            ams_Admin.Status = false;
           
            AMS1.AmsAdmin.Add(ams_Admin);
            AMS1.SaveChanges();
            return Ok("registration successful");
        }

        //Post: add planes
        [Route("PostPlane")]
        [HttpPost]
        public IActionResult PostPlane([FromBody] AmsPlane planeId)
        {
            AmsPlane ams_plane = new AmsPlane();

            ams_plane.OwnerId = AMS1.AmsPlane.Max(p => p.OwnerId) + 1;
            ams_plane.OwnerFirstName = planeId.OwnerFirstName;
            ams_plane.OwnerLastName = planeId.OwnerLastName;
            ams_plane.OwnerContactNumber = planeId.OwnerContactNumber;
            ams_plane.OwnerEmail = planeId.OwnerEmail;
            ams_plane.PlaneType = planeId.PlaneType;
            ams_plane.PlaneCapacity = planeId.PlaneCapacity;
            ams_plane.HangerStatus = "Not Allotted";

            AMS1.AmsPlane.Add(ams_plane);
            AMS1.SaveChanges();
            return Ok("Plane added");
        }

        //Put : update planes
        [Route("PutPlane/{planeId}")]
        [HttpPut("{planeId}")]
        public ActionResult PutPlane(int planeId, [FromBody] AmsPlane plane)
        {
            AmsPlane Plane = AMS1.AmsPlane.Where(p => p.PlaneId == planeId).FirstOrDefault();
            Plane.OwnerId = plane.OwnerId;
            Plane.OwnerFirstName = plane.OwnerFirstName;
            Plane.OwnerLastName = plane.OwnerLastName;
            Plane.OwnerContactNumber = plane.OwnerContactNumber;
            Plane.OwnerEmail = plane.OwnerEmail;
            Plane.PlaneType = plane.PlaneType;
            Plane.PlaneCapacity = plane.PlaneCapacity;
            Plane.HangerStatus = "Not Allotted";

            AMS1.SaveChanges();
            return Ok("Updated");
        }



        //Get : view hangars
        [Route("GetHangar")]
        [HttpGet]
        public IActionResult GetHangar()
        {
            return Ok(AMS1.AmsHangar.Where(h => h.Availability == false));
        }

        //Post: add hangar
        [Route("PostHangar")]
        [HttpPost]
        public IActionResult PostHangar([FromBody] AmsHangar hangarId)
        {
            AmsHangar ams_hangar = new AmsHangar();
            ams_hangar.HangarId = hangarId.HangarId;
            ams_hangar.ManagerId = hangarId.ManagerId;
            ams_hangar.ManagerAddressLine1 = hangarId.ManagerAddressLine1;
            ams_hangar.ManagerAddressLine2 = hangarId.ManagerAddressLine2;
            ams_hangar.City = hangarId.City;
            ams_hangar.State = hangarId.State;
            ams_hangar.ZipCode = hangarId.ZipCode;
            ams_hangar.Availability = hangarId.Availability;
            AMS1.AmsHangar.Add(ams_hangar);
            AMS1.SaveChanges();
            return Ok("Hanger added");
        }

        //Put: update hangar
        [Route("PutHangar/{hangarId}")]
        [HttpPut("{hangarId}")]
        public ActionResult PutHangar(int hangarId, [FromBody] AmsHangar hangar)
        {
            AmsHangar ams_hangar = AMS1.AmsHangar.Where(p => p.HangarId == hangarId).FirstOrDefault();
            ams_hangar.ManagerId = hangar.ManagerId;
            ams_hangar.ManagerAddressLine1 = hangar.ManagerAddressLine1;
            ams_hangar.ManagerAddressLine2 = hangar.ManagerAddressLine2;
            ams_hangar.City = hangar.City;
            ams_hangar.State = hangar.State;
            ams_hangar.ZipCode = hangar.ZipCode;
            ams_hangar.Availability = hangar.Availability;

            AMS1.SaveChanges();
            return Ok("Updated");
        }

        //Get : view WorkSchedule
        [Route("GetWorkSchedule")]
        [HttpGet]
        public IActionResult GetWorkSchedule()
        {
            return Ok(AMS1.AmsWorkSchedule);
        }

        //Post: add WorkSchedule
        [Route("PostWorkSchedule")]
        [HttpPost]
        public IActionResult PostWorkSchedule([FromBody] AmsWorkSchedule scheduleId)
        {
            AmsWorkSchedule ams_work_schedule = new AmsWorkSchedule();
            ams_work_schedule.PilotId = scheduleId.PilotId;
            //ams_work_schedule.PilotName = scheduleId.PilotName;
            ams_work_schedule.DailySchedule = scheduleId.DailySchedule;
            ams_work_schedule.WeeklySchedule = scheduleId.WeeklySchedule;
            ams_work_schedule.MonthlySchedule = scheduleId.MonthlySchedule;
            ams_work_schedule.RescheduleRequest = false;

            AMS1.AmsWorkSchedule.Add(ams_work_schedule);
            AMS1.SaveChanges();
            return Ok("Schedule added");
        }

        //Put: update WorkSchedule
        [Route("PutSchedule/{pilotId}")]
        [HttpPut("{pilotId}")]
        public ActionResult PutSchedule(long pilotId, [FromBody] AmsWorkSchedule schedule)
        {
            AmsWorkSchedule ams_work_schedule = AMS1.AmsWorkSchedule.Where(p => p.PilotId == pilotId).FirstOrDefault();
            
            ams_work_schedule.DailySchedule = schedule.DailySchedule;
            ams_work_schedule.WeeklySchedule = schedule.WeeklySchedule;
            ams_work_schedule.MonthlySchedule = schedule.MonthlySchedule;
            ams_work_schedule.RescheduleRequest = schedule.RescheduleRequest;

            AMS1.SaveChanges();
            return Ok("Updated");
        }

        //Get : view,approve or deny Admin registration request
        [Route("GetAdmin")]
        [HttpGet]
        public IActionResult GetAdmin()
        {
            return Ok(AMS1.AmsAdmin);
        }

        //Get:login
        [Route("PostAdminLogin")]
        [HttpPost]


        public IActionResult PostAdminLogin([FromBody] AmsAdminCredentials admin)
        {
            var user = AMS1.AmsAdmin.Where(p => p.EmailId == admin.EmailId && p.Password == admin.Password && p.Status == true).FirstOrDefault();
            
            if(user==null)
            {
                return Ok(new { status = "No Match" });
            }
            else if (user != null)
            {
                if (user.RejectionBit == true)
                {
                    return Ok(new { status = "Admin Disapproved", comment = user.RejectionReason });
                    
                }
                return Ok(new { status = "Matched", User = user });
            }
            else
            {
                return Ok(new { status = "No Match" });
            }
        }


        //put:ManagerApprove
        [Route("PutManagerApproval/{emailId}/{status}/{comments}")]

        [HttpPut]

        public IActionResult PutManagerApproval(string emailId, bool status, string comments)
        {
            var user = AMS1.AmsManager.Where(p => p.EmailId == emailId).FirstOrDefault();
            if (status == true)
            {
                user.Status = true;
                AMS1.SaveChanges();
                return Ok(new { message = "Manager Approved" });
            }
            else
            {
                user.Status = false;
                user.RejectionBit = true;

                user.RejectionReason = comments;
                AMS1.SaveChanges();
                return Ok(new { message = "Manager Rejected" });
            }

        }


        //put:PilotApprove
        [Route("PutPilotApproval/{LicenseNumber}/{status}/{comments}")]

        [HttpPut]
        public IActionResult PutPilotApproval(string LicenseNumber, bool status, string comments)
        {
            var user = AMS1.AmsPilot.Where(p => p.LicenseNumber == LicenseNumber).FirstOrDefault();
            if (status == true)
            {
                user.Status = true;
                AMS1.SaveChanges();
                return Ok(new { message = "Pilot Approved" });
            }
            else
            {
                user.Status = true;
                user.RejectionBit = true;
                user.RejectionStatus = comments;
                AMS1.SaveChanges();
                return Ok(new { message = "Pilot Rejected" });
            }

        }
        [Route("PostContactus")]
        [HttpPost]
        public IActionResult PostContactus([FromBody] AmsUserFeedback adminId)
        {
            AmsUserFeedback ams_UserFeedback = new AmsUserFeedback();

            ams_UserFeedback.FirstName = adminId.FirstName;
            ams_UserFeedback.LastName = adminId.LastName;
            ams_UserFeedback.Comments = adminId.Comments;
            ams_UserFeedback.Email = adminId.Email;


            AMS1.AmsUserFeedback.Add(ams_UserFeedback);
            AMS1.SaveChanges();
            return Ok("Feedback saved successfully");
        }
        [Route("Getfeedback")]
        [HttpGet]
        public IActionResult Getfeedback()
        {
            return Ok(AMS1.AmsUserFeedback);
        }



    }

}

