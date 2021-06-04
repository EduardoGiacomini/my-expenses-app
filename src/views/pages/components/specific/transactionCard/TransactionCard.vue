<template>
  <card>
    <icon-avatar :icon="$t(`domain.transaction.${this.type}.icon`)"
                 :color="$t(`domain.transaction.${this.type}.color`)"
                 :alt="$t(`domain.transaction.${this.type}.alt`)" />
    <div class="flex-grow overflow-x-hidden">
      <body-title>
        {{ $t(`domain.transaction.${this.type}.label`) }}
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
