const inviteData = {
  ganesha: "॥ Sri Ganeshaya Namah ॥",
  invocationSymbol: "ஸ்ரீ கணேசாய நமஹ",
  invocation: "With the blessings of the Almighty, we invite you to witness the marriage of.",
  family: "Son of Sugan & Kogie Munsamy",
  groom: "Kireshlyn Munsamy",
  bride: "Jeanelle M Soobben",
  brideParents: "Daughter of Strini & Vino Soobben",
  date: "Saturday, 11th July 2026",
  time: "2:00 PM",
  muhurat: "",
  venue: "The Whiteboxx",
  location: "Durban, Musgrave",
  blessing: "We humbly seek your presence and blessings.",
  closing: "Kindly consider this as our personal invitation."
};

document.querySelector(".invocation-symbol").innerText = inviteData.ganesha;
document.querySelector(".tamiltext").innerText = inviteData.invocationSymbol;
document.querySelector(".invocation-text").innerText = inviteData.invocation;
document.querySelector(".family-text").innerText = inviteData.family;
document.querySelector(".groom-name").innerText = inviteData.groom;
document.querySelector(".bride-name").innerText = inviteData.bride;
document.querySelector(".bride-parents").innerText = inviteData.brideParents;
document.querySelector(".wedding-date").innerText = inviteData.date;
document.querySelector(".wedding-time").innerText = inviteData.time;
document.querySelector(".wedding-muhurat").innerText = inviteData.muhurat;
document.querySelector(".venue-name").innerText = inviteData.venue;
document.querySelector(".venue-location").innerText = inviteData.location;
document.querySelector(".blessing-text").innerText = inviteData.blessing;
document.querySelector(".closing-text").innerText = inviteData.closing;
