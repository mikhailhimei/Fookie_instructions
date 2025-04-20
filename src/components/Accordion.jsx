import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import { FullscreenImage } from './FullscreenImage';
import { VideoUploader } from './VideoUploader'

export default function Accordion() {
  const [openSections, setOpenSections] = useState([]);

  const sections = [
    {
      id: 8,
      title: 'Шапка',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}} className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <FullscreenImage src={'../../img/header.jpg'} />
          <FullscreenImage src={'../../img/search.jpg'} />
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        На странице отображаются следующие элементы:
      </p>
      <ul className="space-y-4 pl-6">
        <li className="flex items-start space-x-2">
        <strong>Меню</strong>
          <span className="text-gray-600">— открывается меню для навигации</span>
        </li>
        <li className="flex items-start space-x-2">
          <strong>Поисковая строка</strong>
          <span className="text-gray-600">— поиск по cookie с возможностью фильтрации по описанию</span>
        </li>
        <li className="flex items-start space-x-2">
        <strong>Настройки</strong>
          <span className="text-gray-600">— открывается модальное окно для настройки параметров</span>
        </li>
      </ul>
    </div>
      ),
    },
    {
      id: 1,
      title: 'Мини блок cookie',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}}> 
          <FullscreenImage style={'margan-left:30px'}  src={'../../img/miniBlock.jpg'} />
          <p className="text-gray-700 leading-relaxed">
            Отображается мини-блок с <strong>cookie</strong> с возможностью минимального редактирования. Также, если кука находится в <strong>избранном</strong>, можно <strong>активировать</strong> её.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-6 pb-5">
            <li><strong>Название cookie</strong> — отображается в заголовке блока</li>
            <li><strong>Домен</strong> — всплывает при наведении</li>
            <li><strong>Автозапуск</strong> — индикатор в виде цветной точки</li>
            <li><strong>Флаги безопасности</strong> — чекбоксы HttpOnly / Secure</li>
            <li><strong>Значение</strong> — поле ввода или селектор (если true/false)</li>
            <li><strong>Удаление</strong> — доступно при нажатие на блок</li>
            <li><strong>Применение</strong> — кнопка появляется при изменениях</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Модальное окно редактировать/добавить cookie',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}}>
          <div style={{display:"flex"}}>
          <FullscreenImage style={'margan-left:30px'}  src={'../../img/modalEdit.jpg'} />
          <FullscreenImage src={'../../img/modalEditDescription.jpg'} />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Позволяет <strong>добавить</strong> или <strong>отредактировать</strong> cookie на текущей странице.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-6 pb-5">
            <li><strong>Название</strong> — обязательное поле для ввода</li>
            <li><strong>Домен</strong> — по умолчанию подставляется URL текущего сайта, если поле пустое, то проставляется URL текущей страницы</li>
            <li><strong>Флаги безопасности</strong> — чекбоксы <code>HttpOnly</code> и <code>Secure</code></li>
            <li><strong>Значение</strong> — значение, если указать <code>||</code> и нажать иконку Избранное, значение в мине блоке будет селектором</li>
            <li><strong>Автозапуск</strong> — иконка, активирует автоматическую установку cookie</li>
            <li><strong>Избранное</strong> — позволяет добавить cookie в избранное и задать описание</li>
            <li><strong>Удаление</strong> — иконка, переводит cookie в неактивное состояние</li>
            <li><strong>Применить</strong> — кнопка для сохранения изменений</li>
            <li><strong>Описание</strong> — отображается если cookie добавлено в избранное</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Меню',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}}>
          <FullscreenImage style={'margan-left:30px'}  src={'../../img/slide.jpg'} />
          <ul className="list-disc list-inside space-y-2 pl-6 pb-5">
            <li><strong>Добавить</strong> — открывает модальное окно для создания новой cookie</li>
            <li><strong>Документация</strong> — переходит по ссылке, указанной в настройках</li>
            <li><strong>Обновить</strong> — запускает модальное окно обновления данных</li>
            <li><strong>Подмена домена</strong> — у всех отфильтрованные cookie заменяет домены на указанный в настройках</li>
            <li><strong>Postan</strong> — копирует куки в формате <code>COOKIE_NAME=true;</code></li>
            <li><strong>Загрузка</strong> — открывает модальное окно для загрузки файлов</li>
            <li><strong>Удалить</strong> — отображает модалку для выбора и удаления cookie</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Модальное окно "Обновить"',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}}>
          <FullscreenImage src={'../../img/reload.jpg'} />
          <ul className="list-disc list-inside space-y-4">
            <li>Обновить текущие куки — обновляет текущие куки на странице</li>
            <li>
              Обновить избранное — если режимы работ:
              <div className="space-y-4 max-w-3xl mx-auto">
                <AccordionSection
                  key={120}
                  title="Обновить локально"
                  content={
                    <div style={{paddingLeft: 40, paddingBottom:20}}>
                    <VideoUploader videoPath={"../../img/favoritLocal.mp4"} />
                      <p className="text-gray-700 leading-relaxed mb-2">
                        Чтобы подтягивать документацию со страницы, необходимо, чтобы название cookie имело в коде дата‑сет:
                      </p>
                      <ul className="list-disc list-inside pl-6 space-y-2 text-gray-700">
                        <li><code>data-fookie=cookie_name</code> — наименование cookie</li>
                        <li><code>data-fookie=cookie_value</code> — значение cookie</li>
                        <li><code>data-fookie=cookie_description</code> — описание cookie (опционально)</li>
                      </ul>
                    </div>
                  }
                  isOpen={openSections.includes(120)}
                  onClick={() => toggleSection(120)}
                />
              </div>

              <div className="space-y-4 max-w-3xl mx-auto">
                <AccordionSection
                  key={110}
                  title="Обновить удалённо"
                  content={
                    <div style={{paddingLeft: 40, paddingBottom:20}}>
                    <VideoUploader videoPath={'../../img/favoritRemote.mp4'} />
                      <p className="text-gray-700 leading-relaxed mb-2">
                        Чтобы обновить удалённо, необходимо, чтобы сервер возвращал JSON в формате:
                      </p>
                      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800">
                        {`[
  {
    "name": "NAME",
    "value": "VALUE",
    "description": "DESCRIPTION"
  },
  // ... другие записи
]`}
                      </pre>
                      <p className="text-gray-700 mt-2">
                        Поле <code>description</code> — опционально.
                      </p>
                    </div>
                  }
                  isOpen={openSections.includes(110)}
                  onClick={() => toggleSection(110)}
                />
              </div>

            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      title: 'Модальное окно "Загрузить"',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}} className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            {/* Иконка загрузки (опционально) */}
            <FullscreenImage src={'../../img/upload.jpg'} />
            <div>
              <p className="text-gray-700 leading-relaxed">
                Обеспечивает <strong>импорт</strong> cookie на страницу или в избранное, а также их <strong>экспорт</strong> для передачи или повторного использования.
              </p>

              <ul className="list-disc list-inside space-y-2 pl-6 mt-4 text-gray-700">
                <li>
                  <strong>Зона загрузки</strong> — импортирует cookie и данные локального/сессионного хранилища.
                </li>
                <li>
                  <strong>Кнопка «Скачать»</strong> — экспортирует текущие и избранные cookie в файл.
                </li>
              </ul>
            </div>
          </div>
        </div>

      ),
    },
    {
      id: 7,
      title: 'Настройки',
      content: (
        <div style={{paddingLeft: 40, paddingBottom:20}} className="bg-white p-6 rounded-xl shadow-md">
          <FullscreenImage src={'../../img/settings.jpg'} />
          <p className="text-gray-700 font-semibold text-xl mb-4">
            Модальное окно настроек
          </p>
          <ul className="list-disc list-inside space-y-2 pl-6 text-gray-700">
            <li>
              <strong>Тип хранилища</strong> — выбор отображения cookie, <code>local storage</code>, <code>session storage</code>.
            </li>
            <li>
              <strong>Фильтр</strong> — фильтрует мини-блоки по наименованию.
            </li>
            <li>
              <strong>Url домена</strong> — изменяет домен на указанный.
            </li>
            <li>
              <strong>Url документации</strong> — открывает указанную документацию.
            </li>
            <li>
              <strong>Автопроставление кук</strong> — для включения автопроставления кук.
            </li>
            <li>
              <strong>Тип загрузки данных документации</strong> — позволяет выбрать, откуда подтягивать документацию.
            </li>
            <li>
              <strong>Url сервера</strong> — указывается для удалённой загрузки документации. Запрос будет отправлен на этот URL.
            </li>
          </ul>
        </div>

      ),
    },
  ];

  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {sections.map((section) => (
        <AccordionSection
          key={section.id}
          title={section.title}
          content={section.content}
          isOpen={openSections.includes(section.id)}
          onClick={() => toggleSection(section.id)}
        />
      ))}
    </div>
  );
}
