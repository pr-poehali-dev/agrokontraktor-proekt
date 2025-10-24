import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    { id: 0, component: TitleSlide },
    { id: 1, component: GoalsSlide },
    { id: 2, component: ChannelsSlide },
    { id: 3, component: ProductSlide },
    { id: 4, component: MarketingSlide },
    { id: 5, component: FinanceSlide },
    { id: 6, component: ManagementSlide },
    { id: 7, component: AudienceSlide },
    { id: 8, component: AISlide },
    { id: 9, component: ResultsSlide },
    { id: 10, component: VisionSlide },
    { id: 11, component: RoadmapSlide },
    { id: 12, component: FinalVisionSlide },
    { id: 13, component: ThanksSlide },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAnimating]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1A1F2C] to-[#0A0E27] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00F0FF] to-[#0EA5E9] rounded-lg flex items-center justify-center">
              <Icon name="Wheat" size={24} className="text-[#0A0E27]" />
            </div>
            <span className="font-bold text-xl">АО «Агропромцифра»</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{currentSlide + 1} / {slides.length}</span>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
          <div className={`w-full max-w-7xl transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <CurrentSlideComponent />
          </div>
        </div>

        <div className="px-8 py-6 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="ghost"
              className="gap-2 text-[#00F0FF] hover:text-white hover:bg-white/10"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>
            
            <div className="flex-1 mx-8">
              <Progress value={(currentSlide / (slides.length - 1)) * 100} className="h-1" />
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="ghost"
              className="gap-2 text-[#00F0FF] hover:text-white hover:bg-white/10"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TitleSlide = () => (
  <div className="text-center space-y-8 animate-fade-in">
    <div className="inline-block">
      <Badge className="bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF]/30 text-sm px-4 py-2 mb-6">
        Стратегия развития 2026
      </Badge>
    </div>
    <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-[#00F0FF] to-white bg-clip-text text-transparent leading-tight">
      АО «Агропромцифра»
    </h1>
    <p className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      «От цифровизации к интеллектуальной экосистеме АПК»
    </p>
    <div className="flex items-center justify-center gap-6 pt-8">
      <div className="flex items-center gap-2 text-[#00F0FF]">
        <Icon name="Brain" size={24} />
        <span className="text-lg">ИИ-платформа</span>
      </div>
      <div className="w-px h-8 bg-white/20"></div>
      <div className="flex items-center gap-2 text-[#10B981]">
        <Icon name="TrendingUp" size={24} />
        <span className="text-lg">Экосистемный подход</span>
      </div>
      <div className="w-px h-8 bg-white/20"></div>
      <div className="flex items-center gap-2 text-[#F97316]">
        <Icon name="Rocket" size={24} />
        <span className="text-lg">Цифровая трансформация</span>
      </div>
    </div>
  </div>
);

const GoalsSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
        Цель на 2026 год
      </h2>
    </div>
    
    <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-8 backdrop-blur-sm mb-6">
      <div className="flex items-start gap-4">
        <Icon name="Target" size={40} className="text-[#00F0FF] flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#00F0FF]">🎯 Стратегическая цель</h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            Стать отраслевой платформой № 1 по цифровой трансформации агропромышленного комплекса России,
            где данные, ИИ и процессы объединены в единую экосистему.
          </p>
        </div>
      </div>
    </Card>

    <h3 className="text-2xl font-bold text-white mb-4">🧭 Ключевые задачи</h3>
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <p className="text-gray-200 text-sm leading-relaxed">
          Создать и внедрить автономных ИИ-агентов (для агрономии, логистики, переработки, управления цепочками) — как базовую службу платформы
        </p>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <p className="text-gray-200 text-sm leading-relaxed">
          Обеспечить масштабирование решений — от крупных агрохолдингов до малых фермеров — за счёт стандартизованных модулей и механизма самообслуживания («цифровой конструктор»)
        </p>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <p className="text-gray-200 text-sm leading-relaxed">
          Выйти за рамки отечественного рынка АПК, заложив архитектуру для межотраслевой цифровой платформы, адаптируемой под пищевую переработку, логистику, транспорт, агромашиностроение
        </p>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <p className="text-gray-200 text-sm leading-relaxed">
          Обеспечить устойчивое монетизируемое развитие: переход от госконтрактов к коммерческим SaaS-моделям и подпискам; запуск маркетплейса решений и сервисов
        </p>
      </Card>
    </div>
  </div>
);

const ChannelsSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#10B981] to-white bg-clip-text text-transparent">
      Каналы развития и масштабирования
    </h2>
    <div className="grid grid-cols-2 gap-5">
      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Building2" size={28} className="text-[#10B981] flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">🏛 Государственные каналы</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Интеграция через Минсельхоз РФ, Минцифры, ГИС и нацпроекты. Подтверждённый статус АО «Агропромцифра» как единственного подрядчика Минсельхоза РФ на 2025–2026 годы
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Store" size={28} className="text-[#0EA5E9] flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">🧩 Платформа-маркетплейс «Агропорт»</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Единая витрина цифровых сервисов, ИИ-моделей, интеграций и оборудования. Канал продаж и масштабирования отечественных технологий
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Users" size={28} className="text-[#F97316] flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">🤝 Партнёрская экосистема</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ИТ-компании, стартапы, вузовские лаборатории, исследовательские центры. Формат ecosystem-as-a-service с API и SDK для разработчиков
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Smartphone" size={28} className="text-[#8B5CF6] flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">📱 Цифровые сервисы для агрохозяйств</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Self-service порталы, мобильные приложения, ИИ-помощники. Гибкие SaaS-тарифы и подписочные модели
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Globe" size={28} className="text-[#EC4899] flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">🌍 Выход на смежные рынки</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Логистика, пищевая переработка, экспорт, агрострахование, финтех, трейдинг
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="GraduationCap" size={28} className="text-[#FCD34D] flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">🎓 Образование и сертификация</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Создание Академии цифровых компетенций АПК. Обучение ИИ-инженеров, дата-аналитиков, агрономов-цифровиков
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const ProductSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent">
      Продуктовая стратегия
    </h2>
    <p className="text-lg text-gray-300 mb-6">
      АО «Агропромцифра» создаёт единый платформенный контур АПК, включающий данные, ИИ и сервисы
    </p>
    <div className="grid grid-cols-2 gap-4">
      {[
        {
          name: 'Платформа данных АПК',
          desc: 'Единое хранилище, API, стандарты данных',
          value: 'Сквозная аналитика, совместимость',
          icon: 'Database'
        },
        {
          name: 'ИИ-агенты (Digital Cooperators)',
          desc: 'AgroBrain, SupplyMind, PlantAI, FinAdvisor',
          value: 'Автоматизация решений от поля до экспорта',
          icon: 'Bot'
        },
        {
          name: 'RPA/IoT + ИИ',
          desc: 'Подключение датчиков, дронов, роботов',
          value: 'Предиктивное управление и снижение трудозатрат',
          icon: 'Radio'
        },
        {
          name: 'Low-code / No-code',
          desc: 'Конструктор модулей и микросервисов',
          value: 'Быстрое создание решений без программистов',
          icon: 'Blocks'
        },
        {
          name: 'Маркетплейс «Агропорт 2.0»',
          desc: 'Площадка для продаж и интеграций',
          value: 'Подписки, комиссии, экосистема разработчиков',
          icon: 'ShoppingCart'
        },
        {
          name: 'Digital Twins',
          desc: 'Цифровые двойники предприятий и регионов',
          value: 'Прогноз и оптимизация сценариев',
          icon: 'Copy'
        },
      ].map((product, idx) => (
        <Card key={idx} className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-3">
            <Icon name={product.icon as any} size={24} className="text-[#8B5CF6] flex-shrink-0" />
            <h3 className="text-base font-semibold">{product.name}</h3>
          </div>
          <p className="text-gray-400 text-xs mb-2">{product.desc}</p>
          <div className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded px-2 py-1">
            <p className="text-[#8B5CF6] text-xs font-medium">{product.value}</p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const MarketingSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] to-white bg-clip-text text-transparent">
      Маркетинговая стратегия
    </h2>
    <div className="grid grid-cols-2 gap-5 mb-5">
      <Card className="bg-gradient-to-br from-[#F97316]/10 to-transparent border-[#F97316]/30 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 text-[#F97316]">🎯 Цели</h3>
        <ul className="space-y-2">
          {[
            'Повысить узнаваемость бренда как оператора интеллектуальной экосистемы АПК',
            'Увеличить базу клиентов через партнёрские и цифровые каналы',
            'Продвинуть новую линейку ИИ-решений на рынке'
          ].map((goal, idx) => (
            <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
              <Icon name="Check" size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="bg-gradient-to-br from-[#EF4444]/10 to-transparent border-[#EF4444]/30 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 text-[#EF4444]">💡 Задачи</h3>
        <ul className="space-y-2">
          {[
            'Сегментация и понимание ЦА: 7 групп — от агрохолдингов до стартапов',
            'Позиционирование: АО «Агропромцифра» — «Цифровой мозг АПК России»',
            'Коммуникации и каналы: госканалы, B2B-форумы, digital, партнёрские вебинары',
            'Программы лояльности: скидки для КФХ, сертификаты интеграторов, обучающие курсы'
          ].map((task, idx) => (
            <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
              <Icon name="ArrowRight" size={16} className="text-[#EF4444] flex-shrink-0 mt-0.5" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>

    <Card className="bg-white/5 border-white/10 p-5 backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-4 text-white">📊 Метрики</h3>
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: '+40%', desc: 'новых клиентов в 2026' },
          { label: '90%', desc: 'удержания базы' },
          { label: '30', desc: 'партнёров в экосистеме' },
          { label: '15', desc: 'отраслевых публикаций в медиа' }
        ].map((metric, idx) => (
          <div key={idx} className="bg-[#F97316]/10 border border-[#F97316]/20 rounded p-3 text-center">
            <div className="text-2xl font-bold text-[#F97316] mb-1">{metric.label}</div>
            <div className="text-gray-400 text-xs">{metric.desc}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const FinanceSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#10B981] to-white bg-clip-text text-transparent">
      Финансовая стратегия
    </h2>
    <div className="grid grid-cols-2 gap-5 mb-5">
      <Card className="bg-gradient-to-br from-[#10B981]/10 to-transparent border-[#10B981]/30 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 text-[#10B981]">🎯 Цели</h3>
        <ul className="space-y-2">
          {[
            'Обеспечить устойчивый рост и прибыльность',
            'Повысить капитализацию и инвестиционную привлекательность',
            'Снизить долю госконтрактов до 70% в общем обороте'
          ].map((goal, idx) => (
            <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
              <Icon name="Check" size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="bg-gradient-to-br from-[#059669]/10 to-transparent border-[#059669]/30 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 text-[#059669]">💰 Механизмы</h3>
        <ul className="space-y-2">
          {[
            'Диверсификация доходов: SaaS, API-подписки, маркетплейс, консалтинг',
            'Финансовая эффективность: оптимизация затрат через платформенный подход, ИИ-финконтроль',
            'Инвестиции и партнёрства: ФРП, РЭЦ, венчурные фонды, госпрограммы'
          ].map((mech, idx) => (
            <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
              <Icon name="ArrowRight" size={16} className="text-[#059669] flex-shrink-0 mt-0.5" />
              <span>{mech}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>

    <Card className="bg-white/5 border-white/10 p-5 backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-4 text-white">📈 KPI</h3>
      <div className="grid grid-cols-5 gap-3">
        {[
          { metric: 'ROI', target: '> 25%' },
          { metric: 'Выручка от SaaS/API', target: '≥ 30%' },
          { metric: 'Себестоимость внедрения', target: '–20%' },
          { metric: 'EBITDA', target: '> 15%' },
          { metric: 'Рост капитализации', target: '+35%' }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#10B981]/10 border border-[#10B981]/20 rounded p-3">
            <div className="text-gray-300 text-xs mb-1">{item.metric}</div>
            <div className="text-xl font-bold text-[#10B981]">{item.target}</div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const ManagementSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0EA5E9] to-white bg-clip-text text-transparent">
      Управленческая стратегия
    </h2>
    <div className="grid gap-5">
      <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-transparent border-[#0EA5E9]/30 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 text-[#0EA5E9]">🎯 Цели</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            'Сформировать гибкую и адаптивную систему управления экосистемой',
            'Внедрить культуру инноваций и работы с ИИ внутри компании',
            'Повысить скорость принятия решений и цифровую зрелость'
          ].map((goal, idx) => (
            <div key={idx} className="text-gray-200 text-sm flex items-start gap-2">
              <Icon name="Check" size={16} className="text-[#0EA5E9] flex-shrink-0 mt-0.5" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-[#06B6D4]/10 to-transparent border-[#06B6D4]/30 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 text-[#06B6D4]">🧠 Ключевые инициативы</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            'Новая структура: AI Hub, Data Office, проектный офис экосистемы',
            'Кадры: обучение ИИ-инженеров, программы для руководителей «Digital Leader»',
            'Автоматизация внутренних процессов: RPA, ИИ-ассистенты, цифровой офис CEO',
            'Адаптивность: ежеквартальный пересмотр стратегии, ИИ-дашборды KPI'
          ].map((init, idx) => (
            <div key={idx} className="text-gray-200 text-sm flex items-start gap-2">
              <Icon name="ArrowRight" size={16} className="text-[#06B6D4] flex-shrink-0 mt-0.5" />
              <span>{init}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-5 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-4 text-white">📏 Показатели</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            'Уровень цифровой зрелости 5/5',
            '90% решений основаны на данных',
            '100% проектов через единый API-реестр',
            'Вовлечённость персонала > 80%'
          ].map((metric, idx) => (
            <div key={idx} className="bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded p-3 text-center">
              <p className="text-[#0EA5E9] font-medium text-sm">{metric}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const AudienceSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#EC4899] to-white bg-clip-text text-transparent">
      Целевая аудитория
    </h2>
    <div className="grid grid-cols-2 gap-4">
      {[
        {
          icon: 'Factory',
          segment: '🏭 Агрохолдинги, переработка',
          needs: 'Интеграция ERP/MES/IoT',
          solution: 'PlantAI, Digital Twin',
          value: 'Автоматизация, эффективность'
        },
        {
          icon: 'Tractor',
          segment: '🚜 Средние хозяйства',
          needs: 'Простые SaaS-решения',
          solution: 'AgroBrain, SupplyMind',
          value: 'Оптимизация ресурсов'
        },
        {
          icon: 'Wheat',
          segment: '🌾 Малые фермеры и КФХ',
          needs: 'Простые инструменты и мобильность',
          solution: 'Агропорт, ИИ-помощники',
          value: 'Рекомендации, управление'
        },
        {
          icon: 'Building',
          segment: '🏢 Госорганы и регионы',
          needs: 'Мониторинг, планирование',
          solution: 'FinAdvisor, аналитика 360°',
          value: 'Сценарное моделирование'
        },
        {
          icon: 'Laptop',
          segment: '💻 ИТ-компании, стартапы',
          needs: 'Разработка и продажа решений',
          solution: 'Low-code платформа, API',
          value: 'Кооперация и рост'
        },
        {
          icon: 'Truck',
          segment: '🚚 Логистика и экспорт',
          needs: 'Прозрачность цепочек',
          solution: 'SupplyMind, Digital Twin',
          value: 'Прогноз и устойчивость'
        },
      ].map((item, idx) => (
        <Card key={idx} className="bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-all backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-3">
            <Icon name={item.icon as any} size={24} className="text-[#EC4899] flex-shrink-0" />
            <h3 className="text-base font-semibold">{item.segment}</h3>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex gap-2">
              <span className="text-gray-400 font-medium w-20">Потребности:</span>
              <span className="text-gray-300">{item.needs}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-400 font-medium w-20">Решения:</span>
              <span className="text-[#EC4899]">{item.solution}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-400 font-medium w-20">Ценность:</span>
              <span className="text-[#10B981]">{item.value}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const AISlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent">
      ИИ и автоматизация: ключевые идеи
    </h2>
    <div className="grid grid-cols-2 gap-4">
      {[
        { icon: 'Brain', text: 'Универсальный ИИ-агент «АгроОператор» — единое ядро управления' },
        { icon: 'TrendingUp', text: 'Платформа-предсказатель урожайности и рынков' },
        { icon: 'Bot', text: 'Автономные роботы и дроны под управлением ИИ' },
        { icon: 'Network', text: 'Интеграционная шина данных с ИИ-коннекторами' },
        { icon: 'Store', text: 'Маркетплейс ИИ-моделей' },
        { icon: 'Copy', text: 'Цифровые двойники предприятий и регионов' },
        { icon: 'Shield', text: 'ИИ-безопасность и автоматическое реагирование' },
        { icon: 'Zap', text: 'Самообучающаяся платформа и экосистема сервисов (финансы, страхование, логистика)' }
      ].map((item, idx) => (
        <Card key={idx} className="bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border-[#8B5CF6]/30 p-5 hover:bg-[#8B5CF6]/20 transition-all backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Icon name={item.icon as any} size={28} className="text-[#8B5CF6] flex-shrink-0" />
            <p className="text-gray-200 text-sm leading-relaxed">{item.text}</p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const ResultsSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FCD34D] to-white bg-clip-text text-transparent">
      Ожидаемые результаты к концу 2026 года
    </h2>
    <div className="grid grid-cols-2 gap-4">
      {[
        { metric: 'Доля АПК-предприятий с ИИ-решениями', target: '70%' },
        { metric: 'Снижение затрат клиентов', target: '–25%' },
        { metric: 'Пользователи платформы', target: '> 50 000' },
        { metric: 'Активных модулей на маркетплейсе', target: '200+' },
        { metric: 'Партнёров экосистемы', target: '> 50' },
        { metric: 'Отечественное ПО', target: '100%' },
        { metric: 'Коммерческая выручка вне госконтрактов', target: '> 30%' }
      ].map((item, idx) => (
        <Card key={idx} className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm mb-2">{item.metric}</p>
              <div className="text-4xl font-bold text-[#FCD34D]">{item.target}</div>
            </div>
            <Icon name="TrendingUp" size={36} className="text-[#FCD34D]/50" />
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const VisionSlide = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Позиционирование и видение
    </h2>
    <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-12 backdrop-blur-sm max-w-4xl">
      <div className="mb-8">
        <Icon name="Brain" size={64} className="text-[#00F0FF] mx-auto" />
      </div>
      <h3 className="text-4xl font-bold text-white mb-6">
        АО «Агропромцифра» — цифровой мозг АПК России
      </h3>
      <div className="h-1 w-32 bg-gradient-to-r from-[#00F0FF] to-[#10B981] mx-auto mb-6"></div>
      <p className="text-2xl text-gray-200 leading-relaxed">
        Мы создаём экосистему, в которой искусственный интеллект, данные и технологии
        обеспечивают устойчивое развитие сельского хозяйства и смежных отраслей
      </p>
    </Card>
  </div>
);

const RoadmapSlide = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] to-white bg-clip-text text-transparent">
      Дорожная карта 2026–2028
    </h2>
    <div className="space-y-4">
      {[
        {
          stage: 'I этап',
          period: 'Q1–Q2 2026',
          actions: 'Архитектура платформы данных, запуск AgroBrain и SupplyMind. Пилоты в регионах',
          color: 'from-[#10B981] to-[#059669]'
        },
        {
          stage: 'II этап',
          period: 'Q3–Q4 2026',
          actions: 'Агропорт 2.0 и Marketplace ИИ. Подключение партнёров, разработчиков',
          color: 'from-[#0EA5E9] to-[#0284C7]'
        },
        {
          stage: 'III этап',
          period: '2027',
          actions: 'Расширение на смежные отрасли. Интеграция с пищепромом, экспортом, финтехом',
          color: 'from-[#8B5CF6] to-[#7C3AED]'
        },
        {
          stage: 'IV этап',
          period: '2028',
          actions: 'Самообучающаяся экосистема АПК. Автономные ИИ-агенты, цифровые двойники',
          color: 'from-[#F97316] to-[#EA580C]'
        }
      ].map((item, idx) => (
        <div key={idx} className="relative">
          <div className={`bg-gradient-to-r ${item.color} p-[2px] rounded-xl`}>
            <Card className="bg-[#0A0E27] p-6">
              <div className="flex items-start gap-6">
                <div className={`bg-gradient-to-br ${item.color} p-4 rounded-xl min-w-[160px]`}>
                  <div className="text-white font-bold text-base">{item.stage}</div>
                  <div className="text-white/90 text-sm mt-1">{item.period}</div>
                </div>
                <div className="flex-1">
                  <p className="text-base text-gray-200 leading-relaxed">{item.actions}</p>
                </div>
              </div>
            </Card>
          </div>
          {idx < 3 && (
            <div className="flex justify-center my-2">
              <Icon name="ArrowDown" size={20} className="text-gray-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const FinalVisionSlide = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
    <Badge className="bg-[#FCD34D]/20 text-[#FCD34D] border-[#FCD34D]/30 px-4 py-2">
      Горизонт 2030
    </Badge>
    <h2 className="text-6xl font-bold bg-gradient-to-r from-[#FCD34D] via-[#F97316] to-[#EF4444] bg-clip-text text-transparent">
      Финальное видение 2030
    </h2>
    <Card className="bg-gradient-to-br from-[#F97316]/10 to-transparent border-[#F97316]/30 p-12 backdrop-blur-sm max-w-4xl">
      <div className="mb-8">
        <Icon name="Rocket" size={80} className="text-[#F97316] mx-auto" />
      </div>
      <p className="text-3xl font-bold text-white mb-4">К 2030 году АО «Агропромцифра» —</p>
      <div className="h-1 w-48 bg-gradient-to-r from-[#FCD34D] to-[#EF4444] mx-auto mb-6"></div>
      <p className="text-2xl text-gray-200 leading-relaxed">
        национальный оператор интеллектуальной экономики АПК и смежных отраслей,
        управляющий данными, ИИ-агентами и цифровыми сервисами
        на уровне всей страны
      </p>
    </Card>
  </div>
);

const ThanksSlide = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
    <div className="mb-8">
      <Icon name="Sparkles" size={80} className="text-[#00F0FF] mx-auto" />
    </div>
    <h2 className="text-7xl font-bold bg-gradient-to-r from-[#00F0FF] via-[#10B981] to-[#0EA5E9] bg-clip-text text-transparent">
      Спасибо за внимание!
    </h2>
    <p className="text-3xl text-gray-300">
      АО «Агропромцифра» — цифровой мозг АПК России
    </p>
    <div className="flex items-center justify-center gap-4 pt-8">
      <div className="h-1 w-32 bg-gradient-to-r from-[#00F0FF] to-transparent"></div>
      <Icon name="Heart" className="text-[#EF4444]" size={32} />
      <div className="h-1 w-32 bg-gradient-to-l from-[#00F0FF] to-transparent"></div>
    </div>
  </div>
);

export default Presentation;
