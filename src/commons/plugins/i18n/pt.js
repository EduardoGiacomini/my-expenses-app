export default {
  routes: {
    dashboard: {
      name: 'Painel administrativo'
    },
    transactions: {
      name: 'Transações'
    },
    profile: {
      name: 'Meu perfil'
    }
  },
  domain: {
    transaction: {
      food: {
        label: 'Comidas e bebidas',
        icon: 'lunch_dining',
        alt: 'Comidas e bebidas',
        color: 'bg-red-500'
      },
      transportation: {
        label: 'Transporte',
        icon: 'directions_bus',
        alt: 'Transporte',
        color: 'bg-yellow-500'
      },
      education: {
        label: 'Educação',
        icon: 'school',
        alt: 'Educação',
        color: 'bg-purple-500'
      },
      clothes: {
        label: 'Roupas e sapatos',
        icon: 'local_mall',
        alt: 'Roupas e sapatos',
        color: 'bg-blue-500'
      },
      health: {
        label: 'Saúde',
        icon: 'health_and_safety',
        alt: 'Saúde',
        color: 'bg-green-500'
      }
    }
  },
  pages: {
    components: {
      generic: {},
      specific: {
        userAvatar: {
          alt: 'Foto do usuário'
        },
        sideBar: {
          logout: 'Sair'
        }
      }
    },
    dashboard: {
      title: 'Painel Administrativo',
      sections: {
        transactionsChart: {
          title: 'Transações',
          subtitle: 'Março de 2020 - Abril de 2021 (Últimos 12 meses)'
        },
        lastTransactions: {
          title: 'Últimos lançamentos'
        },
        transactionsDetail: {
          title: 'Para onde vai o meu dinheiro?'
        }
      },
      actions: {
        newTransaction: 'Nova transação'
      }
    }
  }
}
