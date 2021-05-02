export default {
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
        alt: {
          food: 'Hambúrguer',
          transport: 'Ônibus',
          education: 'Capelo',
          clothes: 'Sacola de compras',
          health: 'Cruz médica'
        },
        color: {
          food: 'bg-red-500',
          transport: 'bg-yellow-500',
          education: 'bg-purple-500',
          clothes: 'bg-blue-500',
          health: 'bg-green-500'
        }
      }
    },
    dashboard: {
      title: 'Painel Administrativo',
      sections: {
        expensesChart: {
          title: 'Despesas',
          subtitle: 'Março de 2020 - Abril de 2021 (Últimos 12 meses)'
        },
        lastExpenses: {
          title: 'Últimos lançamentos'
        },
        expensesDetail: {
          title: 'Para onde vai o meu dinheiro?'
        }
      },
      actions: {
        newExpense: 'Nova despesa'
      }
    }
  }
}
