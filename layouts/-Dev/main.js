const logItems = [
    {
      user: "Mad Max",
      date: "2023-08-01 20:52",
      comment: "All positions have been added and dates verified",
    },
    {
      user: "CARL",
      date: "2023-08-02 08:15",
      comment: "Order status has been changed to reservation",
    },
    {
      user: "Louis Lane",
      date: "2023-08-03 12:01",
      comment: "Notified all crew of date change",
    },
  ];
  
  const commentHtml = logItems.map((item) => {
    return `
      <div class="record-log">
        <p>
        <span class="log-user">${item.user}</span>
        <span class="log-date"> ${item.date}</span>
        </p>
        <p class="log-comment">${item.comment}</p>
      </div>
    `;
  });
  
  const logContainer = document.getElementById("log-container");
  logContainer.innerHTML = commentHtml.join("");