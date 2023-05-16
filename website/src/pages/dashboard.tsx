import BalanceStats from "@/components/BalanceStats";
import DashboardLayout from "@/components/DashboardLayout";
import ReferralSection from "@/components/ReferralSection";

export default function Dashboard() {
  return <DashboardLayout>
    <ReferralSection />
    <BalanceStats />
  </DashboardLayout>
}