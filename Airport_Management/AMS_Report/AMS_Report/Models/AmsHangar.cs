using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsHangar
    {
        public AmsHangar()
        {
            AmsHangarStatus = new HashSet<AmsHangarStatus>();
        }

        public long HangarId { get; set; }
        public long ManagerId { get; set; }
        public string ManagerAddressLine1 { get; set; }
        public string ManagerAddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public int? PlaneAlloted { get; set; }
        public bool? Availability { get; set; }

        public virtual AmsManager Manager { get; set; }
        public virtual AmsPlane PlaneAllotedNavigation { get; set; }
        public virtual ICollection<AmsHangarStatus> AmsHangarStatus { get; set; }
    }
}
