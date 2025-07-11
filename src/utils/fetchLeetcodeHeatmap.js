// src/utils/fetchLeetcodeHeatmap.js
export async function fetchLeetcodeHeatmap(username, year) {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "userProfileCalendar",
      variables: { username, year },
      query: `
        query userProfileCalendar($username: String!, $year: Int) {
          userCalendar(username: $username, year: $year) {
            submissionCalendar
          }
        }
      `,
    }),
  });

  const data = await res.json();
  const calendarData = JSON.parse(data.data.userCalendar.submissionCalendar);

  // Convert it to required format
  return Object.entries(calendarData).map(([timestamp, count]) => ({
    date: new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0],
    count: parseInt(count),
  }));
}
