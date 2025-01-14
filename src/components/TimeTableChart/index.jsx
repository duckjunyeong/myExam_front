import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  DataList,
  DataItem,
} from "@components/TimeTableChart/styles";

const TimeTableChart = ({ schedule }) => {
  const minutesPerSlice = 10;

  const typeTimeSummary = useMemo(() => {
    if (schedule && Object.keys(schedule).length > 0) {
      const summary = {};
      const totalTime = Object.values(schedule).reduce(
        (sum, type) => sum + (type ? minutesPerSlice : 0),
        0
      );

      Object.values(schedule).forEach((type) => {
        if (type) {
          if (!summary[type.name] || typeof summary[type.name] === "number") {
            summary[type.name] = {
              value: 0, // minutesPerSlice를 더하는것은 유지
              color: type.color,
            };
          }
          summary[type.name].value += minutesPerSlice;
        }
      });

      const data = Object.keys(summary).map((name) => ({
        name,
        value: summary[name].value,
        percentage:
          totalTime > 0
            ? ((summary[name].value / totalTime) * 100).toFixed(1)
            : 0,
        color: summary[name].color,
      }));

      return { summary, data };
    }
    return null;
  }, [schedule]);

  return (
    <ChartContainer>
      <div style={{ height: "300px", width: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={typeTimeSummary?.data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percentage }) => `${name} (${percentage}%)`}
            >
              {typeTimeSummary?.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <DataList>
        {typeTimeSummary?.data.map((entry) => (
          <DataItem key={entry.name} color={entry.color}>
            <span>{entry.name}:</span> {entry.value}분
          </DataItem>
        ))}
      </DataList>
    </ChartContainer>
  );
};

export default TimeTableChart;
