export default {
  routes: {
    dashboard: {
      name: 'Dashboard'
    },
    expenses: {
      name: 'Expenses'
    },
    profile: {
      name: 'Profile'
    }
  },
  pages: {
    components: {
      avatar: {
        alt: 'User photo'
      },
      logout: {
        message: 'Logout'
      },
      card: {
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
  }
}
