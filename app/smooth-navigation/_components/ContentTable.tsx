import React from "react";

const ContentTable = () => (
  <table className="w-full">
    <tbody>
      {[...Array(100)].map((_, i) => (
        <tr key={i} className="h-12 border-b-2 border-white bg-gray-100">
          <td />
        </tr>
      ))}
    </tbody>
  </table>
);

export default ContentTable;
