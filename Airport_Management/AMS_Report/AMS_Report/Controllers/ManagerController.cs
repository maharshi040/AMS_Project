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
    public class ManagerController : ControllerBase
    {

        TestContext ams_report = new TestContext();


        [Route("GetManager")]
        [HttpGet]
        public IActionResult GetManager()
        {

            var returnList = from i in ams_report.AmsManager.Where(e => e.Status == false)
                             select new
                             {
                                 i.FirstName,
                                 i.LastName,
                                 i.ManagerId,
                                 i.EmailId


                             };
            if (returnList != null)
            {
                return Ok(returnList);
            }
            else
                return Ok(new { message = "no requests" });

        }

        //post:Register
        [Route("PostManagerReg")]
        [HttpPost]
        public IActionResult PostManagerReg([FromBody] AmsManager managerId)
        {
            AmsManager ams_Manager = new AmsManager();
            ams_Manager.FirstName = managerId.FirstName;
            ams_Manager.LastName = managerId.LastName;
            ams_Manager.Age = managerId.Age;
            ams_Manager.Gender = managerId.Gender;
            ams_Manager.DoB = managerId.DoB;
            ams_Manager.ContactNumber = managerId.ContactNumber;
            ams_Manager.AltContactNumber = managerId.AltContactNumber;
            ams_Manager.EmailId = managerId.EmailId;
            ams_Manager.Password = managerId.Password;
            ams_Manager.Status = false;
            ams_report.AmsManager.Add(ams_Manager);
            ams_report.SaveChanges();
            return Ok("registration successful");

        }


        //Get:login
        [Route("PostManagerLogin")]
        [HttpPost]

        public IActionResult PostManagerLogin([FromBody] AmsManagerCredentials manager)
        {

            var user = ams_report.AmsManager.Where(p => p.EmailId == manager.EmailId && p.Password == manager.Password && p.Status == true).FirstOrDefault();
            if(user==null)
            {
                 return Ok(new { status = "No Match" });
            }
            else if (user.RejectionBit == true)
            {
                return Ok(new { status = "Admin Disapproved", comment = user.RejectionReason });
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
        //Get:View hangar table to allot planes
        [Route("GetHangar/{managerId}")]
        [HttpGet("{managerId}")]
        public IActionResult GetHangar(int managerId)
        {
            return Ok(ams_report.AmsHangar.Where(h => h.PlaneAlloted == null && h.ManagerId == managerId));

        }

        //get managerId
        [Route("GetManagerId")]
        [HttpGet]
        public IActionResult GetManagerId()
        {
            return Ok(ams_report.AmsManager.Where(h=> h.Status!=false));
        }

        [Route("GetPlane/{status}")]
        [HttpGet("{status}")]
        public IActionResult GetPlane()
        {
            var unallotedPlanes = from p in ams_report.AmsPlane.Where(plane => plane.HangerStatus == "Not Allotted")
                                  select new
                                  {
                                      p.PlaneId
                                  };

            return Ok(unallotedPlanes);
        }
        [Route("GetPlaneAllotted/{hangerID}/{planeID}")]
        [HttpPut]
        public IActionResult UpdatePlane(long hangerID, int planeID)
        {

            AmsHangar planeAllot = ams_report.AmsHangar.Where(p => p.HangarId == hangerID).FirstOrDefault();
            planeAllot.PlaneAlloted = planeID;
            AmsPlane plane = ams_report.AmsPlane.Where(p => p.PlaneId == planeID).FirstOrDefault(); plane.HangerStatus = "Allotted";
            ams_report.SaveChanges();
            return Ok("Updated");
        }


    }
}