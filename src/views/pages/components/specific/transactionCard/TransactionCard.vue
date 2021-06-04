<template>
  <card>
    <icon-avatar :icon="$t(`pages.components.specific.transactionCard.icon.${this.type}`)"
                 :color="$t(`pages.components.specific.transactionCard.color.${this.type}`)"
                 :alt="$t(`pages.components.specific.transactionCard.alt.${this.type}`)" />
    <div class="flex-grow overflow-x-hidden">
      <body-title>
        {{ $t(`pages.components.specific.transactionCard.type.${this.type}`) }}
      </body-title>
      <body-subtitle>
        {{ createdAt | datetime }}
      </body-subtitle>
    </div>
    <body-title>
      {{ price | currency }}
    </body-title>
  </card>
</template>

<script>
import Card from '../../generic/card/Card'
import IconAvatar from '../../generic/avatar/IconAvatar'
import BodyTitle from '../../generic/typography/BodyTitle'
import BodySubtitle from '../../generic/typography/BodySubtitle'

export default {
  name: 'transaction-card',
  components: { Card, IconAvatar, BodyTitle, BodySubtitle },
  props: ['type', 'createdAt', 'price']
}
</script>
