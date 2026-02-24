import LeftSidebar from "@/components/LeftSidebar";
import CenterContent from "@/components/CenterContent";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:px-6 lg:grid-cols-[300px_1fr_280px] lg:px-8">
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
      <Footer />
    </div>
  );
};

export default Index;
