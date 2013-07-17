if (Meteor.isClient) {
  Template.proposals3.tracks = function () {
    return [
      { 
        title : "getRTI - A portal for RTI with a web front end ( PHP ) and a backend component using a OCR library", 
        link : "https://groups.google.com/d/msg/devthon/bauEymAMbFU/5DnPDlBWFzgJ"
      },
      {
        title : "Deriving the best presentation using R-project and Pecha Kucha Hyderabad videos",
        link : "https://groups.google.com/d/msg/devthon/StPl04VZCBc/ueCBhfeqRdEJ"
      },
      {
        title : " Modelling traffic jams in major city junctions using Julia ",
        link : "https://groups.google.com/d/msg/devthon/cQGykaRZ5Ew/wkXKUMcPVOwJ"
      }
    ]
  }
}