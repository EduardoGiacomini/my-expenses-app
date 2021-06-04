export default {
  routes: {
    dashboard: {
      name: 'Dashboard'
    },
    transactions: {
      name: 'Transactions'
    },
    profile: {
      name: 'Profile'
    }
  },
  domain: {
    transaction: {
      food: {
        label: 'Food and drink',
        icon: 'lunch_dining',
        alt: 'Food and drink',
        color: 'bg-red-500'
      },
      transportation: {
        label: 'Transportation',
        icon: 'directions_bus',
        alt: 'Transportation',
        color: 'bg-yellow-500'
      },
      education: {
        label: 'Education',
        icon: 'school',
        alt: 'Education',
        color: 'bg-purple-500'
      },
      clothes: {
        label: 'Clothes and shoes',
        icon: 'local_mall',
        alt: 'Clothes and shoes',
        color: 'bg-blue-500'
      },
      health: {
        label: 'Health',
        icon: 'health_and_safety',
        alt: 'Health',
        color: 'bg-green-500'
      }
    }
  },
  pages: {
    components: {
      generic: {},
      specific: {
        userAvatar: {
          alt: 'User photo'
        },
        sideBar: {
          logout: 'Logout'
        },
        avatar: {
          alt: 'User photo'
        },
        logout: {
          message: 'Logout'
        }
      }
    },
    dashboard: {
      title: 'Dashboard',
      sections: {
        transactionsChart: {
          title: 'Transactions',
          subtitle: 'March, 2020 - April, 2021 (Last 12 months)'
        },
        lastTransactions: {
          title: 'Last transactions'
        },
        transactionsDetail: {
          title: 'Where does my money go?'
        }
      },
      actions: {
        newTransaction: 'New transaction'
      }
    }
  }
}
