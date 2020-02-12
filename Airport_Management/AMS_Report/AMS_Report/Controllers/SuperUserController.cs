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
    public class SuperUserController : ControllerBase
    {
        TestContext AMS1 = new TestContext();

        //Get : view,approve or deny Admin registration request
        [Route("GetAdmin")]
        [HttpGet]
        public IActionResult GetAdmin()
        {
            var returnList = from i in AMS1.AmsAdmin.Where(e => e.Status == false)
                             select new
                             {
                                 i.FirstName,
                                 i.LastName,
                                 i.AdminId,
                                 i.EmailId
                             };
            return Ok(returnList);
        }

        //put:AdminApprove
        [Route("PutAdminApproval/{emailId}/{status}/{comments}")]

        [HttpPut]

        public IActionResult PutAdminApproval(string emailId, bool status, string comments)
        {
            var user = AMS1.AmsAdmin.Where(p => p.EmailId == emailId).FirstOrDefault();
            if (status == true)
            {
                user.Status = true;
                AMS1.SaveChanges();
                return Ok(new { message = "Admin Approved" });
            }
            else
            {
                user.Status = true;
                user.RejectionBit = true;
                user.RejectionReason = comments;
                AMS1.SaveChanges();
                return Ok(new { message = "Admin Rejected" });
            }

        }
    }
}