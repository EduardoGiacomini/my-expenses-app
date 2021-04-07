export default {
  pt: {
    routes: {
      dashboard: {
        name: 'Painel administrativo'
      },
      expenses: {
        name: 'Minhas despesas'
      },
      profile: {
        name: 'Meu perfil'
      }
    },
    pages: {
      components: {
        avatar: {
          alt: 'Foto do usuário'
        },
        logout: {
          message: 'Sair'
        },
        card: {
          type: {
            food: 'Comidas e bebidas',
            transport: 'Transporte',
            education: 'Educação',
            clothes: 'Roupas e sapatos',
            health: 'Saúde'
          },
          icon: {
            food: 'lunch_dining',
            transport: 'directions_bus',
            education: 'school',
            clothes: 'local_mall',
            health: 'health_and_safety'
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
  },
  en: {
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
}
