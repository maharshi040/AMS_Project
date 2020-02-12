using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsPlane
    {
        public AmsPlane()
        {
            AmsFlightPlan = new HashSet<AmsFlightPlan>();
            AmsHangar = new HashSet<AmsHangar>();
        }

        public int PlaneId { get; set; }
        public int OwnerId { get; set; }
        public string OwnerFirstName { get; set; }
        public string OwnerLastName { get; set; }
        public long OwnerContactNumber { get; set; }
        public string OwnerEmail { get; set; }
        public string PlaneType { get; set; }
        public long PlaneCapacity { get; set; }
        public string HangerStatus { get; set; }

        public virtual ICollection<AmsFlightPlan> AmsFlightPlan { get; set; }
        public virtual ICollection<AmsHangar> AmsHangar { get; set; }
    }
}
