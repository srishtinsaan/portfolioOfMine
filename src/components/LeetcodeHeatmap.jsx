import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { fetchLeetcodeHeatmap } from "../utils/fetchLeetcodeHeatmap";

const LeetcodeHeatmap = ({ username }) => {
  const [heatmapData, setHeatmapData] = useState([]);
  const currentYear = new Date().getFullYear();
  const today = new Date();

  useEffect(() => {
    async function loadData() {
      const data = await fetchLeetcodeHeatmap(username, currentYear);
      console.log(heatmapData);
      setHeatmapData(data);
    }
    loadData();
  }, [username]);

  

  return (
    <div className="w-3/4  h-3/4 object-cover">
      <CalendarHeatmap 
        startDate={new Date(`${currentYear}-01-01`)}
        endDate={today}
        values={heatmapData}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          return `color-github-${Math.min(value.count, 4)}`;
        }}
        tooltipDataAttrs={(value) => {
          return value.date
            ? { "data-tip": `${value.date} — ${value.count} submissions` }
            : {};
        }}
        
      />
    </div>
  );
};

export default LeetcodeHeatmap;
