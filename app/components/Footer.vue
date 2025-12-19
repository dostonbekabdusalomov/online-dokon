<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-subscribe">
        <div class="footer-subscribe-left">
          <div
            class="mail-icon"
            @mouseenter="startAnimation"
            @mouseleave="stopAnimation"
            :class="{ animating: isAnimating }"
          >
            <Icon name="email" />
          </div>

          <div class="subscribe-text">
            <h3>Подпишитесь на рассылку!</h3>
            <p>
              Будьте первыми, кто узнает о наших новых предложениях и акциях
            </p>
          </div>
        </div>

        <div class="footer-subscribe-right">
          <input type="text" placeholder="Ваш Е-мейл" />
          <button>Подписаться</button>
        </div>
      </div>

      <div class="footer-top">
        <div class="footer-company">
          <img src="../assets/images/logo-footer.png" alt="logo" class="logo" />
          <p>Присоединяйтесь в соцсетях</p>

          <div class="socials">
            <nuxt-link class="telegram">
              <Icon name="telegram" />
            </nuxt-link>
            <nuxt-link class="instagram">
              <Icon name="instagram" />
            </nuxt-link>
            <nuxt-link class="facebook">
              <Icon name="facebook" />
            </nuxt-link>
            <nuxt-link class="youtube">
              <Icon name="youtube" />
            </nuxt-link>
          </div>
        </div>

        <div class="footer-links">
          <div>
            <h4>Информация</h4>
            <p>Про нас</p>
            <p>Производителям</p>
            <p>Политика и слова</p>
            <p>Блог</p>
          </div>

          <div>
            <h4>Каталог</h4>
            <p>Акции</p>
            <p>Продовольственные товары</p>
            <p>Продукция строительной сферы</p>
            <p>IT & Электроника</p>
          </div>

          <div>
            <h4>Помощь покупателям</h4>
            <p>Служба поддержки</p>
            <p>Как заказать</p>
            <p>Оплата и Доставка</p>
            <p>Правила возврата</p>
          </div>
        </div>

        <div class="footer-contact">
          <h4>Контакты</h4>
          <a href="tel: +998 78 150 60 06"
            ><p>+998 78 150 60 06</p>
            <Icon name="phone"
          /></a>
          <p>info@marketb2b.uz</p>

          <nuxt-link class="chat-btn">
            <Icon name="chat" />
            <div class="info-btn">
              <p>Нужна помощь?</p>
              <span>Напишите нам <Icon name="right-arrow" /></span>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="bottom-inner">
          <p>2024–2025 © TTTPU Все права защищены</p>
          <div class="payments"></div>
          <p>Пользовательская оферта</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const isAnimating = ref(false)

let timeout
const startAnimation = () => {
  isAnimating.value = true
  if (timeout) clearTimeout(timeout)
}

const stopAnimation = () => {
  timeout = setTimeout(() => {
    isAnimating.value = false
  }, 4000)
}
</script>

<style scoped lang="scss">
.footer {
  background: #f4f5fa;
  padding: 40px 0;
  p {
    margin: 0;
  }

  &-subscribe {
    position: relative;
    overflow: hidden;
    background: #000;
    color: white;
    border-radius: 14px;
    padding: 30px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .subscribe-text {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 356px;
      h3 {
        font-family: Bounded;
        font-weight: 400;
        font-style: Regular;
        font-size: 22px;
        line-height: 120%;
        letter-spacing: 0%;
        margin: 0;
      }
      p {
        font-family: Inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 13px;
        line-height: 150%;
        letter-spacing: 0%;
        margin: 0;
      }
    }

    &-left {
      display: flex;
      align-items: center;
    }

    &::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      background: rgba(0, 102, 255, 0.7);
      filter: blur(120px);
      border-radius: 50%;
      top: 50%;
      left: 650px;
      transform: translateY(-50%);
      animation: floatingCircle 6s infinite ease-in-out;
      z-index: 0;
    }

    * {
      position: relative;
      z-index: 1;
    }

    @keyframes floatingCircle {
      0% {
        transform: translate(-30px, -50%);
      }
      50% {
        transform: translate(180px, -50%);
      }
      100% {
        transform: translate(-30px, -50%);
      }
    }

    .mail-icon {
      border-radius: 5px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &.animating {
        animation: envelopeOpen 4s infinite ease-in-out;
      }
    }

    @keyframes envelopeOpen {
      0% {
        transform: rotateY(45deg);
      }
      50% {
        transform: rotateY(-45deg);
      }
      100% {
        transform: rotateX(0deg);
      }
      25% {
        transform: rotateX(90deg);
      }
      75% {
        transform: rotateX(-90deg);
      }
      50% {
        transform: rotateZ(90deg);
      }
    }

    .footer-subscribe-right button {
      background: #feeb27;

      font-weight: bold;
      cursor: pointer;
      border: none;
      color: #000;
      border-radius: 6px;
      padding: 10px 20px;
      transition: transform 0.3s;
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0%;
    }
    .footer-subscribe-right {
      display: flex;
      gap: 16px;
      flex-direction: column;
      width: 356px;
      input {
        border-radius: 8px;
        padding: 10px 12px;
        background: #ffffff;
        outline: none;
        border: none;
        font-family: Inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        color: #22242a;
      }
    }

    .footer-subscribe-right button:hover {
      transform: scale(1.05);
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  }

  &-top {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 16px;
    margin-top: 40px;
    padding-bottom: 40px;
  }

  .footer-company {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .logo {
      max-width: 213px;
    }
    p {
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -1%;
      color: #22242a;
    }

    .socials {
      display: flex;
      gap: 24px;
      a {
        padding: 12px;
        border-radius: 48px;
        background: #ffffff;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: center;
      }

      svg {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }
    }
  }

  .footer-links {
    display: flex;
    gap: 16px;
    & > div {
      width: 32%;
    }

    h4 {
      margin: 0 0 16px 0;
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -1%;
      color: #22242a;
    }

    p {
      margin-bottom: 6px;
      font-family: Inter;
      font-weight: 400;
      font-style: Regular;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -1%;

      cursor: pointer;
      color: #555;
      &:hover {
        color: black;
      }
      &:last-child {
        margin: 0;
      }
    }
  }

  .footer-contact {
    display: flex;
    flex-direction: column;

    gap: 16px;
    h4 {
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -1%;
      margin: 0;
    }
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      gap: 8px;
      p {
        font-family: Bounded;
        color: #22242a;
        font-weight: 400;
        font-style: Regular;
        font-size: 22px;
        line-height: 120%;
        letter-spacing: 0%;
      }
    }
    p {
      font-family: Inter;
      font-weight: 400;
      font-style: Regular;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -1%;
    }

    .chat-btn {
      margin-top: 10px;
      padding: 8px 16px;
      border-radius: 8px;
      border: 1px solid #ccc;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.3s;
      width: max-content;
      .info-btn {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      p {
        font-family: Inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 13px;
        color: #22242a;
        line-height: 16px;
        letter-spacing: -1%;
      }
      span {
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 13px;
        line-height: 16px;
        color: #22242a;
        letter-spacing: 0%;
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          background: #feeb27;
          border-radius: 50px;
        }
      }
    }
  }

  &-bottom {
    border-top: 1px solid #ddd;
    margin-top: 20px;

    .bottom-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 0;
    }

    .payments {
      display: flex;
      gap: 10px;
      img {
        height: 28px;
      }
    }
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .footer-subscribe {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .footer-links {
    gap: 25px;
  }
  .footer-bottom .bottom-inner {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
