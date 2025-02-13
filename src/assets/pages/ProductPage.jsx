import { motion } from "framer-motion" 

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { AlertCircleIcon, IndianRupee, Package, TrendingUp } from "lucide-react"
import ProductsTable from "../components/products/ProductsTable"
import CategoryDistributionPieChart from "../components/overview/CategoryDistributionPieChart"
import SalesTrendsChart from "../components/products/SalesTrendsChart"

 const ProductPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Product"/>
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
          name="Total Product" 
          icon={Package} 
          value= "₹52344" 
          color="#6366f1"
          />
 	        <StatCard name='top selling' icon={TrendingUp} value='Telvision' color='#8B5CF6' />
					<StatCard name='Low stock' icon={AlertCircleIcon} value='567' color='#EC4899' />
					<StatCard name='total revenue' icon={IndianRupee} value='12.5%' color='#10B981' />
  </motion.div>

{/* product table */}
<ProductsTable/>

{/* charts */}


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SalesTrendsChart/>
      <CategoryDistributionPieChart/>
    </div>

    </main>
 
    </div>
  )
}

export default ProductPage