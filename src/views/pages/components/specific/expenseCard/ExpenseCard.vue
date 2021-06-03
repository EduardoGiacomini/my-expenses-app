<template>
  <card>
    <icon-avatar :icon="$t(`pages.components.card.icon.${this.type}`)"
                 :color="$t(`pages.components.card.color.${this.type}`)"
                 :alt="$t(`pages.components.card.alt.${this.type}`)" />
    <div class="flex-grow overflow-x-hidden">
      <body-title>
        {{ $t(`pages.components.card.type.${this.type}`) }}
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
  name: 'expense-card',
  components: { Card, IconAvatar, BodyTitle, BodySubtitle },
  props: ['type', 'createdAt', 'price']
}
</script>
