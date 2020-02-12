using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsUserFeedback
    {
        public long UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Comments { get; set; }
        public string Email { get; set; }
    }
}
