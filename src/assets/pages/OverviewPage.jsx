import { BarChart3, LucideShoppingBag, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import SalesOverviewCharts from "../components/overview/SalesOverviewCharts"
import CategoryDistributionPieChart from "../components/overview/CategoryDistributionPieChart"
import SalesChannelChart from "../components/overview/SalesChannelChart"


const OverviewPage = () => {
  return (
   
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Overview"/>
    <main
    className="max-w-7xl mx-auto py-6 px-4 lg:px-8 " 
    >
  {/* stats */}

  <motion.div
  className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
    initial={{opacity:0 , y:20}}
    animate={{opacity:1 , y:0}}
    transition={{duration:1}}
  >
          <StatCard
          name="Total Sales" 
          icon={Zap} 
          value= "₹120,676" 
          color="#6366f1"
          />
 	        <StatCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCard name='Total Products' icon={LucideShoppingBag} value='567' color='#EC4899' />
					<StatCard name='Conversion Rate' icon={BarChart3} value='12.5%' color='#10B981' />
  </motion.div>

  {/* charts */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
      <SalesOverviewCharts/>
      <CategoryDistributionPieChart/>
      <SalesChannelChart/>   
      </div>

    </main>

    </div>
  )
}

export default OverviewPage