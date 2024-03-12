import "firebase/compat/firestore";
import Announcement from "../component/Announcement";

function VeiwAnnouncements() {
  return (
    <div>
      <div className="pt-14">
        <Announcement />
      </div>
      <div className="flex justify-end absolute top-8 right-6">
        <button
          id="addButton"
          className="inline-flex rounded items-center border border-transparent p-1  bg-purple-600 text-white shadow-sm hover:bg-purple-700"
        >
          <a href="/executiveannouncements">ADD</a>
        </button>
      </div>
    </div>
  );
}

export default VeiwAnnouncements;
