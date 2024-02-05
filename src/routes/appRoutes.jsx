import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import Pages from "../pages/frontcms/Pages";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import MasterPageLayout from "../pages/master/MasterPageLayout";
import State from "../pages/master/State";
import City from "../pages/master/City";
import InventoryPage from "../pages/inventory/InventoryPage";
import DealerPage from "../pages/dealer/DealerPage";
import Banner from "../pages/frontcms/Banner";
import MediaManager from "../pages/frontcms/MediaManager";
import dashboard_icon from "../assets/images/dashboard_icon.svg"
import brands_icon from "../assets/images/brands_icon.svg"
import cashier_icon from "../assets/images/cashier_icon.svg"
import categories_icon from "../assets/images/categories_icon.svg"
import city_icon from "../assets/images/city_icon.svg"
import dealer_icon from "../assets/images/dealer_icon.svg"
import inventory_icon from "../assets/images/inventory_icon.svg"
import master_icon from "../assets/images/master_icon.svg"
import scanning_icon from "../assets/images/scanning_icon.svg"
import state_icon from "../assets/images/state_icon.svg"
import store_icon from "../assets/images/store_icon.svg"
import subcategories_icon from "../assets/images/subcategories_icon.svg"
import SystemSettingsPageLayout from "../pages/systemsettings/StorePageLayout";
import GeneralSettings from "../pages/systemsettings/GeneralSettings";
import NotificationSettings from "../pages/systemsettings/NotificationSettings";
import Users from "../pages/systemsettings/Users";
import Pincode from "../pages/master/Pincode";
import Designation from "../pages/master/Designation";
import Department from "../pages/master/Department";
import Categories from "../pages/master/Categories";
import SubCategories from "../pages/master/SubCategories";
import Brands from "../pages/master/Brands";
import Roles from "../pages/master/Roles";
import PaymentsPageLayout from "../pages/payments/PaymentsPageLayout";
import OnlinePayment from "../pages/payments/OnlinePayment";
import CodPayment from "../pages/payments/CODPayment";
import Store from "../pages/store/store";
import Stock from "../pages/stock/stock";
// import Employees from "../pages/employees/Employees";
import FrontCmsPageLayout from "../pages/frontcms/FrontCmsPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import PageNotFound from "../components/PageNotFount";
import CreateInventory from "../pages/inventory/CreateInventory";
import InventoryPageLayout from "../pages/inventory/InventoryPageLayout";
import LoginPage from "../pages/login/LoginPage";
import SigninPage from "../pages/signin/SigninPage";
import OtpVerificationPage from "../pages/otpverification/OtpVerificationPage";
import CreateRole from "../pages/master/CreateRole";
import EmployeePage from "../pages/employees/EmployeePage";
import AddInventoryListing from "../pages/inventory/AddInventoryListing";
import CategorySetup from "../pages/inventory/CategorySetup";
import AddNewProduct from "../pages/inventory/AddNewProduct";
import ProductList from "../pages/inventory/ProductList";
import UpdateProduct from "../pages/inventory/UpdateProduct";
import UpdateIventoryPrice from "../pages/inventory/UpdateInventoryPrice";
import UpdateStorePrice from "../pages/inventory/UpdateStorePrice";
import UpdateVariant from "../pages/inventory/UpdateVariant";
import UpdateImage from "../pages/inventory/UpdateImage";
import StoreStock from "../pages/inventory/StoreStock";
// const NotFoundPage = () => {
//   // You can render your 404 page component here
//   return <div>404 Not Found</div>;
// };
const appRoutes: RouteType[] = [
  // {
  //   index: true,
  //   element: <LoginPage />,
  //   state: 'login',
  // },
  // {
  //   path: "/signin",
  //   element: <SigninPage />,
  //   state: "signin",
  // },
  // {
  //   path: "/otpverification",
  //   element: <OtpVerificationPage />,
  //   state: "otpverification",
  // },
  
  // {
  //   index: true,
  //   element: <HomePage />,
  //   state: "home"
  // },

  {
    path: "/",
    element: <DefaultPage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <img src={dashboard_icon} alt="dashboard_icon" />
    },
  },
  {
    path: "/frontcms",
    element: <FrontCmsPageLayout />,
    state: "frontcms",
    sidebarProps: {
      displayText: "Front CMS",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/frontcms/pages",
        element: <Pages />,
        state: "frontcms.pages",
        sidebarProps: {
          displayText: "Pages",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/frontcms/mediamanager",
        element: <MediaManager />,
        state: "frontcms.mediamanager",
        sidebarProps: {
          displayText: "Media Manager",
          icon: <img src={categories_icon} alt="categories_icon" />
        }
      },
      {
        path: "/frontcms/banner",
        element: <Banner />,
        state: "frontcms.banner",
        sidebarProps: {
          displayText: "Banner",
          icon: <img src={subcategories_icon} alt="subcategories_icon" />
        }
      }
    ]
  },
  {
    path: "/master",
    element: <MasterPageLayout />,
    state: "master",
    sidebarProps: {
      displayText: "Master",
      icon: <img src={master_icon} alt="master_icon" />
    },
    child: [
      
      // {
      //   path: "/master/state",
      //   element: <State />,
      //   state: "master.state",
      //   sidebarProps: {
      //     displayText: "State",
      //     icon: <img src={state_icon} alt="state_icon" />
      //   },
      // },
      // {
      //   path: "/master/city",
      //   element: <City />,
      //   state: "master.city",
      //   sidebarProps: {
      //     displayText: "City",
      //     icon: <img src={city_icon} alt="city_icon" />
      //   }
      // },
      // {
      //   path: "/master/pincode",
      //   element: <Pincode />,
      //   state: "master.pincode",
      //   sidebarProps: {
      //     displayText: "Pincode",
      //     icon: <img src={city_icon} alt="city_icon" />
      //   }
      // },
      {
        path: "/master/createrole",
        element: <CreateRole />,
        state: "master.createrole",
        sidebarProps: {
          displayText: "Create Role",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      // {
      //   path: "/master/designation",
      //   element: <Designation />,
      //   state: "master.designation",
      //   sidebarProps: {
      //     displayText: "Designation",
      //     icon: <img src={city_icon} alt="city_icon" />
      //   }
      // },
      // {
      //   path: "/master/department",
      //   element: <Department />,
      //   state: "master.department",
      //   sidebarProps: {
      //     displayText: "Department",
      //     icon: <img src={city_icon} alt="city_icon" />
      //   }
      // },
      {
        path: "/master/category",
        element: <Categories />,
        state: "master.category",
        sidebarProps: {
          displayText: "Category",
          icon: <img src={city_icon} alt="city_icon" />
        }
      },
      {
        path: "/master/subcategory",
        element: <SubCategories />,
        state: "master.subcategory",
        sidebarProps: {
          displayText: "Subcategory",
          icon: <img src={city_icon} alt="city_icon" />
        }
      },
      // {
      //   path: "/master/brands",
      //   element: <Brands />,
      //   state: "master.brands",
      //   sidebarProps: {
      //     displayText: "brands",
      //     icon: <img src={city_icon} alt="city_icon" />
      //   }
      // },
      // {
      //   path: "/master/roles",
      //   element: <Roles />,
      //   state: "master.roles",
      //   sidebarProps: {
      //     displayText: "Roles",
      //     icon: <img src={city_icon} alt="city_icon" />
      //   }
      // },
    ]
  },
  {
    path: "/payments",
    element: <PaymentsPageLayout />,
    state: "payments",
    sidebarProps: {
      displayText: "Payments",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/payments/onlinepayment",
        element: <OnlinePayment />,
        state: "payments.onlinepayment",
        sidebarProps: {
          displayText: "Online payment",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/payments/codpayment",
        element: <CodPayment />,
        state: "payments.codpayment",
        sidebarProps: {
          displayText: "COD payment",
          icon: <img src={categories_icon} alt="categories_icon" />
        }
      },
    ]
  },
  {
    path: "/store",
    element: <Store />,
    state: "store",
    sidebarProps: {
      displayText: "Store",
      icon: <img src={store_icon} alt="store_icon" />
    }
  },
  {
    path: "/inventory",
    element: <InventoryPageLayout />,
    state: "inventory",
    sidebarProps: {
      displayText: "Inventory",
      icon: <img src={inventory_icon} alt="inventory_icon" />
    },
    child: [
      {
        path: "/inventory/createinventory",
        element: <CreateInventory />,
        state: "inventory.createinventory",
        sidebarProps: {
          displayText: "Create Inventory",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/addinventorylisting",
        element: <AddInventoryListing />,
        state: "inventory.addinventorylisting",
        sidebarProps: {
          displayText: "Add inventory listing",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/categorysetup",
        element: <CategorySetup />,
        state: "inventory.categorysetup",
        sidebarProps: {
          displayText: "Category Setup",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/addnewproduct",
        element: <AddNewProduct/>,
        state: "inventory.addnewproduct",
        sidebarProps: {
          displayText: "Add New Product",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/productlist",
        element: <ProductList/>,
        state: "inventory.productlist",
        sidebarProps: {
          displayText: "Product List",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/updateproduct",
        element: <UpdateProduct/>,
        state: "inventory.updateproduct",
        sidebarProps: {
          displayText: "Update Product",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/updateinventoryprice",
        element: <UpdateIventoryPrice/>,
        state: "inventory.updateinventoryprice",
        sidebarProps: {
          displayText: "Update Inventory Price",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/updatestoreprice",
        element: <UpdateStorePrice/>,
        state: "inventory.updatestoreprice",
        sidebarProps: {
          displayText: "Update Store Price",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/updatevariant",
        element: <UpdateVariant/>,
        state: "inventory.updatevariant",
        sidebarProps: {
          displayText: "Update Variant",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/updateimage",
        element: <UpdateImage/>,
        state: "inventory.updateimage",
        sidebarProps: {
          displayText: "Update Image",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/inventory/storestock",
        element: <StoreStock/>,
        state: "inventory.storestock",
        sidebarProps: {
          displayText: "Store Stock",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      
    ]
  },
  {
    path: "/dealer",
    element: <DealerPage />,
    state: "dealer",
    sidebarProps: {
      displayText: "Dealer",
      icon: <img src={dealer_icon} alt="dealer_icon" />
    }
  },
  {
    path: "/stock",
    element: <Stock />,
    state: "stock",
    sidebarProps: {
      displayText: "Stock",
      icon: <img src={scanning_icon} alt="scannin_icon" />
    }
  },
  {
    path: "/employees",
    element: <EmployeePage />,
    state: "employees",
    sidebarProps: {
      displayText: "Employee",
      icon: <img src={cashier_icon} alt="cashier_icon" />
    }
  },
  {
    path: "/systemsettings",
    element: <SystemSettingsPageLayout />,
    state: "systemsettings",
    sidebarProps: {
      displayText: "Settings",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/systemsettings/generalsettings",
        element: <GeneralSettings />,
        state: "systemsettings.generalsettings",
        sidebarProps: {
          displayText: "General Settings",
          icon: <img src={brands_icon} alt="brands_icon" />
        },
      },
      {
        path: "/systemsettings/notificationsettings",
        element: <NotificationSettings />,
        state: "systemsettings.notificationsettings",
        sidebarProps: {
          displayText: "Notification Settings",
          icon: <img src={categories_icon} alt="categories_icon" />
        }
      },
      {
        path: "/systemsettings/users",
        element: <Users />,
        state: "systemsettings.users",
        sidebarProps: {
          displayText: "Users",
          icon: <img src={subcategories_icon} alt="subcategories_icon" />
        }
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />,
    state: 'notfound',
  },
];

export default appRoutes;