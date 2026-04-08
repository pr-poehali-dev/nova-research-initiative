import { useState } from "react";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">STEFANIA*</div>
        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(true); }}>Пора выбирать: откройте меню!</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setAboutOpen(true); }}>О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА,
              <br />
              КАК ОТ <span>БОГА</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Стефания — место, где ностальгия встречается с дерзким вкусом. Ретро-атмосфера, живая кухня и компания, которая делает вечер незабываемым.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }} onClick={() => setMenuOpen(true)}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }} onClick={() => setStoryOpen(true)}>
                Наша история
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/bucket/5cdc86b9-8bb1-4cf4-8689-d5173d7915bb.jpg')" }}>
            <div className="sticker">
              ОТКРЫТО
              <br />
              ДО 02:00
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СТЕФАНИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СТЕФАНИЯ — ЭТО ВАЙБ * БУРГЕРЫ КОТОРЫЕ СНЯТСЯ * ЖИВАЯ МУЗЫКА * ОТКРЫТЫ ДО 2:00 * ЛУЧШЕЕ МЕСТО В ГОРОДЕ *
            СТЕФАНИЯ — ЭТО ВАЙБ * БУРГЕРЫ КОТОРЫЕ СНЯТСЯ * ЖИВАЯ МУЗЫКА * ОТКРЫТЫ ДО 2:00 * ЛУЧШЕЕ МЕСТО В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ СЕЗОНА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/bucket/d4a28434-f230-45f5-9938-6cc9e284c5ba.jpeg"
                alt="Стефания-бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Стефания-бургер</h3>
                  <span className="price">1 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная котлета из мраморной говядины, фирменный соус «Стефа», маринованный лук на бриоши.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/bucket/fd0bb69a-c71d-4be3-bce7-5b850eb0090b.jpg"
                alt="Ретро Пепперони"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ретро Пепперони</h3>
                  <span className="price">1 700 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Двойная пепперони, острый мёд, тесто на закваске — как в 70-х, только лучше.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/bucket/baf1eb1f-ad40-458d-a8c0-aa0a3005b22d.jpg"
                alt="Коктейль Стефа"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Коктейль «Стефа»</h3>
                  <span className="price">1 100 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Джин, цветок бузины, голубой чай и съедобная золотая пыльца. Один раз — и навсегда.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО С ДУШОЙ.</h2>
            <p className="vibe-text">
              Стефания — это не просто ресторан. Это ощущение тепла, музыки и хорошей компании. Виниловые пластинки, мягкий свет и диваны из 70-х создают атмосферу, в которой хочется остаться навсегда. Бронь не нужна — просто приходи.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }} onClick={() => setStoryOpen(true)}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @STEFANIA.DINER
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      {aboutOpen && (
        <div
          onClick={() => setAboutOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            backgroundImage: `url('https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/files/889b6431-2b8d-4ed4-ace6-e5e0ec5794a2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,10,5,0.72)" }} />
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "740px",
              width: "100%",
              background: "rgba(245,238,220,0.97)",
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "48px",
            }}
          >
            <button
              onClick={() => setAboutOpen(false)}
              style={{
                position: "absolute", top: "-16px", right: "-16px",
                width: "40px", height: "40px",
                background: "var(--primary)", color: "white",
                border: "var(--border)", fontWeight: 800, fontSize: "18px",
                cursor: "pointer", zIndex: 10,
              }}
            >
              ✕
            </button>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "24px", textTransform: "uppercase" }}>
              О нас
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: "24px", color: "#111" }}>
              Ретро‑ресторан «Стефания» — это не просто заведение общепита, а настоящий портал в начало XX века. Расположенный в старинном особняке в центре Москвы, он воссоздаёт атмосферу дореволюционной России с удивительной точностью и любовью к деталям. Пространство ресторана погружает гостей в атмосферу начала XX века:
            </p>
            <ul style={{ paddingLeft: "20px", lineHeight: 2.1, color: "#111", marginBottom: "24px" }}>
              <li>Стены оклеены обоями с тиснением в стиле ар‑нуво.</li>
              <li>Мебель — подлинная антикварная: резные дубовые стулья, массивные буфеты, зеркала в потемневших рамах.</li>
              <li>Освещение — лампы с тёплым жёлтым светом и тканевыми абажурами, создающими мягкий, приглушённый свет.</li>
              <li>Декор — старинные часы, граммофон (который действительно работает), канделябры, черно‑белые фотографии в рамках, карты того времени на стенах.</li>
              <li>Паркет с узором «ёлочка», отполированный до мягкого блеска.</li>
              <li>Камин в главном зале — зимой в нём горит настоящий огонь.</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: "#111", fontStyle: "italic" }}>
              В углу зала стоит граммофон, играющий вальсы и романсы начала века. Официанты одеты в стиле эпохи: мужчины — во фраки и жилеты, женщины — в платья с фартуками.
            </p>
          </div>
        </div>
      )}

      {storyOpen && (
        <div
          onClick={() => setStoryOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            backgroundImage: `url('https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/files/a4541878-a377-4cee-a8a9-bc670baa455a.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,10,5,0.65)" }} />
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "720px",
              width: "100%",
              background: "var(--cream)",
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "48px",
            }}
          >
            <button
              onClick={() => setStoryOpen(false)}
              style={{
                position: "absolute", top: "-16px", right: "-16px",
                width: "40px", height: "40px",
                background: "var(--primary)", color: "white",
                border: "var(--border)", fontWeight: 800, fontSize: "18px",
                cursor: "pointer", zIndex: 10,
              }}
            >
              ✕
            </button>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "24px", textTransform: "uppercase" }}>
              Наша история
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: "20px", color: "#111" }}>
              Всё началось с находки — старинного альбома с фотографиями и рецептами, который Александр Воронов обнаружил на чердаке дома своей бабушки в маленьком городке под Петербургом. Альбом принадлежал его прабабушке Стефании, которая в 1910‑х годах держала небольшое кафе в центре города. Пожелтевшие страницы хранили не только рецепты, но и атмосферу эпохи: наброски интерьера, заметки о гостях, зарисовки блюд.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: "32px", color: "#111" }}>
              Александр, успешный ресторатор с тремя современными заведениями в Москве, вдруг почувствовал, что устал от модных трендов. Ему захотелось создать что‑то настоящее, тёплое, с историей. Идея ретро‑ресторана, посвящённого памяти прабабушки, родилась мгновенно. Он назвал его «Стефания» — в честь женщины, чей дух вдохновил этот проект.
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: "16px", textTransform: "uppercase" }}>
              Меню
            </h3>
            <p style={{ lineHeight: 1.8, marginBottom: "16px", color: "#111" }}>
              Меню «Стефании» стало гастрономическим путешествием в прошлое с современными акцентами. Шеф‑повар, изучив бабушкины рецепты, адаптировал их для современного гостя.
            </p>
            <ul style={{ paddingLeft: "20px", lineHeight: 2, color: "#111", marginBottom: "16px" }}>
              <li><strong>Фирменное блюдо</strong> — «Утка по‑стефаниевски»: рецепт из альбома, где птица мариновалась в мёде и травах, а подавалась с мочёными яблоками.</li>
              <li><strong>Закуски:</strong> малосольные огурцы по старинному рецепту, форшмак, паштеты в фарфоровых чашечках.</li>
              <li><strong>Горячие блюда:</strong> бефстроганов с картофельным пюре, расстегаи с рыбой, голубцы с гречкой.</li>
              <li><strong>Десерты:</strong> медовик, сметанник, бланманже с вишнёвым соусом — многие по оригинальным рецептам Стефании.</li>
              <li><strong>Напитки:</strong> сбитень, морсы из лесных ягод, домашние наливки, подборка вин конца XIX — начала XX века (реплики по сохранившимся описаниям).</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: "#111", fontStyle: "italic" }}>
              Каждое блюдо в меню сопровождалось короткой историей: откуда взялся рецепт, кто его любил в семье, какие события с ним связаны.
            </p>
          </div>
        </div>
      )}

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              border: "var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute", top: "-16px", right: "-16px",
                width: "40px", height: "40px",
                background: "var(--primary)", color: "white",
                border: "var(--border)", fontWeight: 800, fontSize: "18px",
                cursor: "pointer", zIndex: 10,
              }}
            >
              ✕
            </button>
            <img
              src="https://cdn.poehali.dev/projects/ac70d293-8085-49bd-999e-b1831c4bf4ba/bucket/3a9a0dd8-625f-4df6-9750-6cc53e88f66e.jpeg"
              alt="Меню Стефания"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      )}

      <footer>
        <div>
          <div className="footer-logo">STEFANIA*</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для вкусной еды и ретро-атмосферы. С любовью, с 2024 года — но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Чт: 12:00 – 00:00</li>
            <li>Пт–Сб: 12:00 – 02:00</li>
            <li>Вс: 12:00 – 23:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (000) 000-00-00</li>
            <li>hello@stefania.ru</li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}