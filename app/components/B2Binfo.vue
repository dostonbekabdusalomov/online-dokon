<template>
  <section class="b2b">
    <div class="container">
      <div class="b2b-top">
        <div class="b2b-left">
          <h2>
            Интернет портал для B2B сегмента, ориентированный на промышленность,
            торговлю и производство Узбекистана
          </h2>
        </div>

        <div class="b2b-right">
          <p>
            Подача ориентирована на B2B и будет способствовать представителям
            следующих отраслей вашего бизнеса:
          </p>

          <ul v-if="more">
            <li>Производственные предприятия — заводы, фабрики…</li>
            <li>Оптовая торговля — дистрибьюторы, оптовики…</li>
            <li>Ритейл — гипермаркеты, торговые сети…</li>
          </ul>
          <button class="show-btn" @click="more = !more">
            <p>{{ more ? 'Скрыть' : 'Показать полностью' }}</p>

            <Icon name="down" :class="{ rotate: more }" />
          </button>
        </div>
      </div>

      <hr />

      <div class="b2b-features">
        <p>Тысячи предложений для вашего бизнеса</p>
        <div class="feature" v-for="(item, i) in features" :key="i">
          <div class="icon">
            <Icon :name="item.icon" />
          </div>
          <div class="feature-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const more = ref(false)

const features = [
  {
    title: 'Тысячи предложений',
    icon: 'star',
    text: 'для вашего бизнеса'
  },
  {
    title: '15 000 SKU',
    icon: 'star',
    text: 'Большой ассортимент товаров'
  },
  {
    title: 'Отсрочка',
    icon: 'star',
    text: 'для постоянных клиентов'
  }
]
</script>

<style scoped lang="scss">
.b2b {
  padding: 60px 0;

  .b2b-top {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .b2b-left {
      max-width: 50%;

      h2 {
        font-family: Bounded;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        leading-trim: NONE;
        line-height: 120%;
        letter-spacing: 0%;
        color: #22242a;
      }
    }

    .b2b-right {
      max-width: 50%;
      font-size: 14px;
      color: #555;

      .show-btn {
        background: none;
        border: none;
        color: #0b2f82;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 4px;
        .rotate {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }

        img {
          transition: transform 0.3s ease;
        }
        p {
          margin: 0;
        }
      }
      ul {
        margin-top: 10px;
        list-style: auto;

        li {
          margin-bottom: 6px;
        }
      }
    }
  }

  hr {
    margin: 40px 0;
    border: 0;
    border-top: 1px solid #e6e6e6;
  }

  .b2b-features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    p {
      font-family: Bounded;
      font-weight: 400;
      font-style: Regular;
      font-size: 18px;
      leading-trim: NONE;
      line-height: 120%;
      letter-spacing: 0%;
      color: #22242a;
      margin: 0;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 12px;
      &-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        h3,
        p {
          margin: 0;
        }
        h3 {
          font-family: Bounded;
          font-weight: 400;
          font-style: Regular;
          font-size: 28px;
          leading-trim: NONE;
          line-height: 120%;
          letter-spacing: 0%;
          color: #22242a;
        }
        p {
          font-family: Inter;
          font-weight: 400;
          font-style: Regular;
          font-size: 14px;
          leading-trim: NONE;
          line-height: 20px;
          letter-spacing: 0%;
          color: #22242a;
        }
      }

      .icon {
        width: 48px;
        height: 40px;
        background: #fff500;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h3 {
        font-size: 16px;
        font-weight: 600;
      }

      p {
        font-size: 13px;
        color: #666;
      }
    }
  }
}
</style>
