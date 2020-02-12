using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsManager
    {
        public AmsManager()
        {
            AmsHangar = new HashSet<AmsHangar>();
            AmsHangarStatus = new HashSet<AmsHangarStatus>();
        }

        public long ManagerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public DateTime DoB { get; set; }
        public long ContactNumber { get; set; }
        public long AltContactNumber { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public bool? Status { get; set; }
        public bool? RejectionBit { get; set; }
        public string RejectionReason { get; set; }

        public virtual ICollection<AmsHangar> AmsHangar { get; set; }
        public virtual ICollection<AmsHangarStatus> AmsHangarStatus { get; set; }
    }
}
