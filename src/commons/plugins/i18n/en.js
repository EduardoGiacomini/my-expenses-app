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
        },
        transactionCard: {
          type: {
            food: 'Foods and drinks',
            transport: 'Transportation',
            education: 'Education',
            clothes: 'Clothes and shoes',
            health: 'Health'
          },
          icon: {
            food: 'lunch_dining',
            transport: 'directions_bus',
            education: 'school',
            clothes: 'local_mall',
            health: 'health_and_safety'
          },
          alt: {
            food: 'Hamburguer',
            transport: 'Bus',
            education: 'mortarboard',
            clothes: 'Shooping bag',
            health: 'Medical cross'
          },
          color: {
            food: 'bg-red-500',
            transport: 'bg-yellow-500',
            education: 'bg-purple-500',
            clothes: 'bg-blue-500',
            health: 'bg-green-500'
          }
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
