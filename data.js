const inviteData = {
  ganesha: "॥ Sri Ganeshaya Namah ॥",
  invocation: "With the blessings of the Almighty, we invite you to share our joy.",
  family: "Mr. & Mrs. Munsamy request the honour of your presence at the wedding of their beloved son",
  groom: "Kireshlyn Munsamy",
  bride: "Jeanelle M Soobben",
  brideParents: "Beloved daughter of Mr. & Mrs. Soobben",
  date: "Saturday, 11th July 2026",
  time: "2:00 PM",
  muhurat: "",
  venue: "The Whiteboxx",
  location: "Durban, Musgrave",
  blessing: "We humbly seek your presence and blessings.",
  closing: "Kindly consider this as our personal invitation."
};

document.querySelector(".invocation-symbol").innerText = inviteData.ganesha;
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
