using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsPilot
    {
        public AmsPilot()
        {
            AmsWorkSchedule = new HashSet<AmsWorkSchedule>();
        }

        public long PilotId { get; set; }
        public string LicenseNumber { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public int Ssn { get; set; }
        public string Password { get; set; }
        public bool? Status { get; set; }
        public bool? ScheduleStatus { get; set; }
        public bool? RejectionBit { get; set; }
        public string RejectionStatus { get; set; }

        public virtual ICollection<AmsWorkSchedule> AmsWorkSchedule { get; set; }
    }
}
