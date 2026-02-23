import LeftSidebar from "@/components/LeftSidebar";
import CenterContent from "@/components/CenterContent";
import RightSidebar from "@/components/RightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[300px_1fr_280px]">
        {/* Left Sidebar */}
        <div className="lg:block">
          <LeftSidebar />
        </div>

        {/* Center Content */}
        <div className="min-w-0">
          <CenterContent />
        </div>

        {/* Right Sidebar */}
        <div className="lg:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
