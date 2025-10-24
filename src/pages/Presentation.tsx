import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    { id: 10, component: RoadmapSlide },
    { id: 11, component: VisionSlide },
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
              <Icon name="Cpu" size={24} className="text-[#0A0E27]" />
            </div>
            <span className="font-bold text-xl">АгроПромЦифра</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{currentSlide + 1} / {slides.length}</span>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center p-8">
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
      От цифровизации к интеллектуальной экосистеме АПК
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
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
        Цель на 2026 год
      </h2>
    </div>
    
    <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-8 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <Icon name="Target" size={40} className="text-[#00F0FF] flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#00F0FF]">Стратегическая цель</h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            Стать отраслевой платформой № 1 по цифровой трансформации агропромышленного комплекса России,
            где данные, ИИ и процессы объединены в единую экосистему.
          </p>
        </div>
      </div>
    </Card>

    <div className="grid grid-cols-2 gap-6 mt-8">
      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Bot" size={32} className="text-[#10B981]" />
          <div>
            <h4 className="text-lg font-semibold mb-2">ИИ-агенты</h4>
            <p className="text-gray-400 text-sm">
              Создание автономных ИИ-агентов для агрономии, логистики, переработки и управления цепочками
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Scaling" size={32} className="text-[#0EA5E9]" />
          <div>
            <h4 className="text-lg font-semibold mb-2">Масштабирование</h4>
            <p className="text-gray-400 text-sm">
              От крупных агрохолдингов до малых фермеров через стандартизованные модули и самообслуживание
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="Network" size={32} className="text-[#F97316]" />
          <div>
            <h4 className="text-lg font-semibold mb-2">Межотраслевая платформа</h4>
            <p className="text-gray-400 text-sm">
              Выход за рамки АПК: пищевая переработка, логистика, транспорт, агромашиностроение
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Icon name="DollarSign" size={32} className="text-[#10B981]" />
          <div>
            <h4 className="text-lg font-semibold mb-2">Монетизация</h4>
            <p className="text-gray-400 text-sm">
              Переход к SaaS-моделям, маркетплейс решений, партнёрская экосистема
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const ChannelsSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Каналы развития и масштабирования
    </h2>
    
    <div className="grid grid-cols-3 gap-6">
      <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/30 p-6 backdrop-blur-sm">
        <Icon name="Building2" size={40} className="text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-3">Государственные каналы</h3>
        <p className="text-gray-400 text-sm mb-4">
          Интеграция через Минсельхоз РФ, Минцифры, ГИС и нацпроекты
        </p>
        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
          Единственный подрядчик 2025-2026
        </Badge>
      </Card>

      <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-6 backdrop-blur-sm">
        <Icon name="Store" size={40} className="text-[#00F0FF] mb-4" />
        <h3 className="text-xl font-semibold mb-3">Платформа «Агропорт»</h3>
        <p className="text-gray-400 text-sm mb-4">
          Единая витрина цифровых сервисов, ИИ-моделей, интеграций
        </p>
        <Badge className="bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF]/30">
          Маркетплейс решений
        </Badge>
      </Card>

      <Card className="bg-gradient-to-br from-[#10B981]/10 to-transparent border-[#10B981]/30 p-6 backdrop-blur-sm">
        <Icon name="Users" size={40} className="text-[#10B981] mb-4" />
        <h3 className="text-xl font-semibold mb-3">Партнёрская экосистема</h3>
        <p className="text-gray-400 text-sm mb-4">
          ИТ-компании, стартапы, вузы, исследовательские центры
        </p>
        <Badge className="bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30">
          Ecosystem-as-a-Service
        </Badge>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <Icon name="Smartphone" size={40} className="text-[#0EA5E9] mb-4" />
        <h3 className="text-xl font-semibold mb-3">Цифровые сервисы</h3>
        <p className="text-gray-400 text-sm">
          Self-service порталы, мобильные приложения, ИИ-помощники, SaaS-тарифы
        </p>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <Icon name="Globe" size={40} className="text-[#F97316] mb-4" />
        <h3 className="text-xl font-semibold mb-3">Смежные рынки</h3>
        <p className="text-gray-400 text-sm">
          Логистика, переработка, экспорт, агрострахование, финтех, трейдинг
        </p>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all backdrop-blur-sm">
        <Icon name="GraduationCap" size={40} className="text-yellow-400 mb-4" />
        <h3 className="text-xl font-semibold mb-3">Образование</h3>
        <p className="text-gray-400 text-sm">
          Академия цифровых компетенций АПК, обучение специалистов
        </p>
      </Card>
    </div>
  </div>
);

const ProductSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Продуктовая стратегия
    </h2>
    
    <div className="grid grid-cols-2 gap-4">
      <ProductCard 
        icon="Database" 
        title="Платформа данных АПК" 
        content="Единое хранилище, API, стандарты данных"
        value="Сквозная аналитика"
        color="text-[#00F0FF]"
      />
      <ProductCard 
        icon="Bot" 
        title="ИИ-агенты" 
        content="AgroBrain, SupplyMind, PlantAI, FinAdvisor"
        value="Автоматизация решений"
        color="text-[#10B981]"
      />
      <ProductCard 
        icon="Cpu" 
        title="RPA/IoT + ИИ" 
        content="Датчики, дроны, роботы под управлением ИИ"
        value="Предиктивное управление"
        color="text-purple-400"
      />
      <ProductCard 
        icon="Blocks" 
        title="Low-code / No-code" 
        content="Конструктор модулей и микросервисов"
        value="Быстрое создание решений"
        color="text-[#0EA5E9]"
      />
      <ProductCard 
        icon="ShoppingBag" 
        title="Маркетплейс Агропорт 2.0" 
        content="Площадка для продаж и интеграций"
        value="Подписки и комиссии"
        color="text-[#F97316]"
      />
      <ProductCard 
        icon="Copy" 
        title="Digital Twins" 
        content="Цифровые двойники предприятий и регионов"
        value="Прогноз и оптимизация"
        color="text-yellow-400"
      />
      <ProductCard 
        icon="Shield" 
        title="Облачная инфраструктура" 
        content="Отечественные облака, ИИ-мониторинг"
        value="Безопасность и суверенность"
        color="text-red-400"
      />
      <ProductCard 
        icon="BarChart3" 
        title="Аналитика 360°" 
        content="BI-дашборды и визуализация"
        value="Прозрачность управления"
        color="text-pink-400"
      />
    </div>
  </div>
);

const ProductCard = ({ icon, title, content, value, color }: any) => (
  <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm group">
    <Icon name={icon} size={32} className={`${color} mb-3 group-hover:scale-110 transition-transform`} />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-3">{content}</p>
    <Badge className="bg-white/10 text-gray-300 border-white/20 text-xs">
      {value}
    </Badge>
  </Card>
);

const MarketingSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Маркетинговая стратегия
    </h2>
    
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-6 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4 text-[#00F0FF]">Позиционирование</h3>
          <p className="text-xl text-gray-200">
            «Цифровой мозг АПК России»
          </p>
        </Card>

        <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Users" size={24} className="text-[#10B981]" />
            Целевая аудитория
          </h3>
          <p className="text-gray-400 text-sm">
            7 сегментов: от агрохолдингов до стартапов, госорганов и смежных отраслей
          </p>
        </Card>

        <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Megaphone" size={24} className="text-[#F97316]" />
            Каналы коммуникации
          </h3>
          <div className="space-y-2 text-sm text-gray-400">
            <div>• Госканалы: Минсельхоз, ГИИС</div>
            <div>• B2B: агрофорумы, отраслевые медиа</div>
            <div>• Digital: соцсети, блог, email</div>
            <div>• Партнёрские вебинары и пилоты</div>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-4">Ключевые метрики 2026</h3>
        
        <MetricCard 
          icon="TrendingUp" 
          label="Новые клиенты" 
          value="+40%" 
          color="text-[#10B981]"
        />
        <MetricCard 
          icon="Heart" 
          label="Удержание базы" 
          value="90%" 
          color="text-[#00F0FF]"
        />
        <MetricCard 
          icon="Handshake" 
          label="Партнёры в экосистеме" 
          value="30+" 
          color="text-purple-400"
        />
        <MetricCard 
          icon="FileText" 
          label="Отраслевые публикации" 
          value="15+" 
          color="text-[#F97316]"
        />
      </div>
    </div>
  </div>
);

const MetricCard = ({ icon, label, value, color }: any) => (
  <Card className="bg-white/5 border-white/10 p-5 backdrop-blur-sm hover:scale-105 transition-transform">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon name={icon} size={28} className={color} />
        <span className="text-gray-400">{label}</span>
      </div>
      <span className={`text-3xl font-bold ${color}`}>{value}</span>
    </div>
  </Card>
);

const FinanceSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Финансовая стратегия
    </h2>
    
    <div className="grid grid-cols-3 gap-6 mb-8">
      <Card className="bg-gradient-to-br from-[#10B981]/10 to-transparent border-[#10B981]/30 p-6 backdrop-blur-sm text-center">
        <Icon name="Target" size={40} className="text-[#10B981] mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">ROI</h3>
        <p className="text-4xl font-bold text-[#10B981]">&gt; 25%</p>
      </Card>
      
      <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-6 backdrop-blur-sm text-center">
        <Icon name="Percent" size={40} className="text-[#00F0FF] mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">EBITDA</h3>
        <p className="text-4xl font-bold text-[#00F0FF]">&gt; 15%</p>
      </Card>
      
      <Card className="bg-gradient-to-br from-[#F97316]/10 to-transparent border-[#F97316]/30 p-6 backdrop-blur-sm text-center">
        <Icon name="TrendingUp" size={40} className="text-[#F97316] mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">Капитализация</h3>
        <p className="text-4xl font-bold text-[#F97316]">+35%</p>
      </Card>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="PieChart" size={24} className="text-purple-400" />
          Диверсификация доходов
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">SaaS подписки</span>
            <Badge className="bg-purple-500/20 text-purple-300">≥ 30%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">API-сервисы</span>
            <Badge className="bg-blue-500/20 text-blue-300">Рост</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Маркетплейс</span>
            <Badge className="bg-green-500/20 text-green-300">Новый</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Консалтинг</span>
            <Badge className="bg-orange-500/20 text-orange-300">Развитие</Badge>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Rocket" size={24} className="text-[#00F0FF]" />
          Ключевые механизмы
        </h3>
        <div className="space-y-3 text-sm text-gray-400">
          <div className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-[#10B981] mt-1" />
            <span>Снижение себестоимости внедрения на 20%</span>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-[#10B981] mt-1" />
            <span>ИИ-финконтроль через FinAdvisor</span>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-[#10B981] mt-1" />
            <span>Платформенный подход к оптимизации</span>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-[#10B981] mt-1" />
            <span>Привлечение инвестиций: ФРП, РЭЦ, венчур</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const ManagementSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Управленческая стратегия
    </h2>
    
    <div className="grid grid-cols-2 gap-6">
      <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/30 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Building" size={24} className="text-purple-400" />
          Новая структура
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div>• AI Hub — центр разработки ИИ</div>
          <div>• Data Office — управление данными</div>
          <div>• Проектный офис экосистемы</div>
          <div>• Цифровой офис CEO</div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="GraduationCap" size={24} className="text-[#00F0FF]" />
          Развитие кадров
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div>• Обучение ИИ-инженеров</div>
          <div>• Программа Digital Leader</div>
          <div>• Повышение ИИ-компетенций</div>
          <div>• Культура инноваций</div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-[#10B981]/10 to-transparent border-[#10B981]/30 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Zap" size={24} className="text-[#10B981]" />
          Автоматизация
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div>• RPA внутренних процессов</div>
          <div>• ИИ-ассистенты для сотрудников</div>
          <div>• Цифровой документооборот</div>
          <div>• Единый API-реестр проектов</div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-[#F97316]/10 to-transparent border-[#F97316]/30 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="RefreshCw" size={24} className="text-[#F97316]" />
          Адаптивность
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div>• Ежеквартальный пересмотр стратегии</div>
          <div>• ИИ-дашборды KPI в реальном времени</div>
          <div>• Гибкое управление проектами</div>
          <div>• Data-driven решения: 90%</div>
        </div>
      </Card>
    </div>

    <div className="grid grid-cols-4 gap-4 mt-8">
      <MetricBadge label="Цифровая зрелость" value="5/5" color="bg-[#00F0FF]" />
      <MetricBadge label="Data-driven решения" value="90%" color="bg-[#10B981]" />
      <MetricBadge label="API-реестр" value="100%" color="bg-purple-500" />
      <MetricBadge label="Вовлечённость" value="80%" color="bg-[#F97316]" />
    </div>
  </div>
);

const MetricBadge = ({ label, value, color }: any) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
    <div className={`text-2xl font-bold ${color} bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400`}>
      {value}
    </div>
    <div className="text-xs text-gray-400 mt-1">{label}</div>
  </div>
);

const AudienceSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Целевая аудитория
    </h2>
    
    <div className="grid grid-cols-2 gap-4">
      <AudienceCard 
        icon="Factory"
        emoji="🏭"
        title="Агрохолдинги, переработка"
        needs="Интеграция ERP/MES/IoT"
        solution="PlantAI, Digital Twin"
        value="Автоматизация, эффективность"
      />
      <AudienceCard 
        icon="Tractor"
        emoji="🚜"
        title="Средние хозяйства"
        needs="Простые SaaS-решения"
        solution="AgroBrain, SupplyMind"
        value="Оптимизация ресурсов"
      />
      <AudienceCard 
        icon="Wheat"
        emoji="🌾"
        title="Малые фермеры и КФХ"
        needs="Простые инструменты, мобильность"
        solution="Агропорт, ИИ-помощники"
        value="Рекомендации, управление"
      />
      <AudienceCard 
        icon="Building2"
        emoji="🏢"
        title="Госорганы и регионы"
        needs="Мониторинг, планирование"
        solution="FinAdvisor, аналитика 360°"
        value="Сценарное моделирование"
      />
      <AudienceCard 
        icon="Laptop"
        emoji="💻"
        title="ИТ-компании, стартапы"
        needs="Разработка и продажа решений"
        solution="Low-code платформа, API"
        value="Кооперация и рост"
      />
      <AudienceCard 
        icon="Truck"
        emoji="🚚"
        title="Логистика и экспорт"
        needs="Прозрачность цепочек"
        solution="SupplyMind, Digital Twin"
        value="Прогноз и устойчивость"
      />
    </div>
  </div>
);

const AudienceCard = ({ icon, emoji, title, needs, solution, value }: any) => (
  <Card className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all backdrop-blur-sm">
    <div className="flex items-start gap-3 mb-3">
      <span className="text-3xl">{emoji}</span>
      <h3 className="text-lg font-semibold flex-1">{title}</h3>
    </div>
    <div className="space-y-2 text-sm">
      <div>
        <span className="text-gray-500">Потребности:</span>
        <p className="text-gray-400">{needs}</p>
      </div>
      <div>
        <span className="text-gray-500">Решения:</span>
        <p className="text-[#00F0FF]">{solution}</p>
      </div>
      <Badge className="bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 text-xs mt-2">
        {value}
      </Badge>
    </div>
  </Card>
);

const AISlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      ИИ и автоматизация
    </h2>
    
    <div className="grid grid-cols-2 gap-5">
      <AICard 
        icon="Brain"
        title="Универсальный ИИ-агент"
        subtitle="АгроОператор"
        description="Единое ядро управления всеми процессами АПК"
        color="from-[#00F0FF]/20 to-transparent border-[#00F0FF]/30"
      />
      <AICard 
        icon="LineChart"
        title="Платформа-предсказатель"
        subtitle="Урожайность и рынки"
        description="Прогнозирование на основе больших данных и ML"
        color="from-[#10B981]/20 to-transparent border-[#10B981]/30"
      />
      <AICard 
        icon="Drone"
        title="Автономные роботы"
        subtitle="Дроны и техника"
        description="Управление через ИИ, мониторинг полей в реальном времени"
        color="from-purple-500/20 to-transparent border-purple-500/30"
      />
      <AICard 
        icon="Workflow"
        title="Интеграционная шина"
        subtitle="ИИ-коннекторы"
        description="Автоматическое подключение систем и источников данных"
        color="from-[#0EA5E9]/20 to-transparent border-[#0EA5E9]/30"
      />
      <AICard 
        icon="Store"
        title="Маркетплейс ИИ-моделей"
        subtitle="Готовые решения"
        description="Библиотека обученных моделей для различных задач АПК"
        color="from-[#F97316]/20 to-transparent border-[#F97316]/30"
      />
      <AICard 
        icon="Copy"
        title="Цифровые двойники"
        subtitle="Предприятия и регионы"
        description="Виртуальные копии для симуляции и оптимизации"
        color="from-yellow-500/20 to-transparent border-yellow-500/30"
      />
      <AICard 
        icon="Shield"
        title="ИИ-безопасность"
        subtitle="Автоматическое реагирование"
        description="Мониторинг угроз и защита инфраструктуры"
        color="from-red-500/20 to-transparent border-red-500/30"
      />
      <AICard 
        icon="Network"
        title="Самообучающаяся платформа"
        subtitle="Экосистема сервисов"
        description="Финансы, страхование, логистика — единая ИИ-среда"
        color="from-pink-500/20 to-transparent border-pink-500/30"
      />
    </div>
  </div>
);

const AICard = ({ icon, title, subtitle, description, color }: any) => (
  <Card className={`bg-gradient-to-br ${color} p-5 backdrop-blur-sm hover:scale-105 transition-transform`}>
    <Icon name={icon} size={32} className="mb-3 text-white" />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-[#00F0FF] mb-2">{subtitle}</p>
    <p className="text-xs text-gray-400">{description}</p>
  </Card>
);

const ResultsSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Ожидаемые результаты к концу 2026 года
    </h2>
    
    <div className="grid grid-cols-3 gap-6">
      <ResultCard 
        icon="Percent"
        value="70%"
        label="АПК-предприятий с ИИ-решениями"
        color="text-[#00F0FF]"
        bgColor="from-[#00F0FF]/10"
      />
      <ResultCard 
        icon="TrendingDown"
        value="-25%"
        label="Снижение затрат клиентов"
        color="text-[#10B981]"
        bgColor="from-[#10B981]/10"
      />
      <ResultCard 
        icon="Users"
        value="50 000+"
        label="Пользователей платформы"
        color="text-purple-400"
        bgColor="from-purple-500/10"
      />
      <ResultCard 
        icon="Package"
        value="200+"
        label="Активных модулей на маркетплейсе"
        color="text-[#F97316]"
        bgColor="from-[#F97316]/10"
      />
      <ResultCard 
        icon="Handshake"
        value="50+"
        label="Партнёров экосистемы"
        color="text-[#0EA5E9]"
        bgColor="from-[#0EA5E9]/10"
      />
      <ResultCard 
        icon="Shield"
        value="100%"
        label="Отечественное ПО"
        color="text-red-400"
        bgColor="from-red-500/10"
      />
    </div>

    <Card className="bg-gradient-to-br from-[#10B981]/10 to-transparent border-[#10B981]/30 p-8 backdrop-blur-sm mt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon name="DollarSign" size={48} className="text-[#10B981]" />
          <div>
            <h3 className="text-2xl font-semibold mb-1">Коммерческая выручка</h3>
            <p className="text-gray-400">Доля вне госконтрактов</p>
          </div>
        </div>
        <div className="text-6xl font-bold text-[#10B981]">&gt; 30%</div>
      </div>
    </Card>
  </div>
);

const ResultCard = ({ icon, value, label, color, bgColor }: any) => (
  <Card className={`bg-gradient-to-br ${bgColor} to-transparent border-white/10 p-6 backdrop-blur-sm text-center hover:scale-105 transition-transform`}>
    <Icon name={icon} size={40} className={`${color} mx-auto mb-3`} />
    <div className={`text-4xl font-bold ${color} mb-2`}>{value}</div>
    <p className="text-sm text-gray-400">{label}</p>
  </Card>
);

const RoadmapSlide = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-white bg-clip-text text-transparent">
      Дорожная карта 2026–2028
    </h2>
    
    <div className="space-y-6">
      <RoadmapPhase 
        phase="I"
        period="Q1–Q2 2026"
        title="Архитектура платформы данных"
        items={[
          "Запуск AgroBrain и SupplyMind",
          "Пилотные проекты в регионах",
          "Единое хранилище данных АПК",
          "API и стандарты интеграции"
        ]}
        color="from-[#00F0FF]/20 to-transparent border-[#00F0FF]/30"
        icon="Rocket"
      />
      
      <RoadmapPhase 
        phase="II"
        period="Q3–Q4 2026"
        title="Агропорт 2.0 и Marketplace ИИ"
        items={[
          "Подключение партнёров и разработчиков",
          "Маркетплейс ИИ-моделей и решений",
          "Low-code конструктор модулей",
          "Первые коммерческие подписки"
        ]}
        color="from-[#10B981]/20 to-transparent border-[#10B981]/30"
        icon="Store"
      />
      
      <RoadmapPhase 
        phase="III"
        period="2027"
        title="Расширение на смежные отрасли"
        items={[
          "Интеграция с пищепромом",
          "Выход на экспортные рынки",
          "Финтех и агрострахование",
          "Логистические цепочки"
        ]}
        color="from-purple-500/20 to-transparent border-purple-500/30"
        icon="Globe"
      />
      
      <RoadmapPhase 
        phase="IV"
        period="2028"
        title="Самообучающаяся экосистема АПК"
        items={[
          "Автономные ИИ-агенты",
          "Цифровые двойники всех уровней",
          "Полная автоматизация процессов",
          "Платформа № 1 в России"
        ]}
        color="from-[#F97316]/20 to-transparent border-[#F97316]/30"
        icon="Brain"
      />
    </div>
  </div>
);

const RoadmapPhase = ({ phase, period, title, items, color, icon }: any) => (
  <Card className={`bg-gradient-to-br ${color} p-6 backdrop-blur-sm hover:scale-[1.02] transition-transform`}>
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
          <Icon name={icon} size={28} className="text-white" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Badge className="bg-white/20 text-white border-white/30 text-lg px-3 py-1">
            Этап {phase}
          </Badge>
          <span className="text-[#00F0FF] font-semibold">{period}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
              <Icon name="CheckCircle2" size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

const VisionSlide = () => (
  <div className="space-y-12 animate-fade-in text-center">
    <div>
      <Badge className="bg-[#00F0FF]/20 text-[#00F0FF] border-[#00F0FF]/30 text-sm px-4 py-2 mb-8">
        Финальное видение 2030
      </Badge>
      <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-[#00F0FF] via-white to-[#10B981] bg-clip-text text-transparent leading-tight">
        К 2030 году
      </h2>
    </div>
    
    <Card className="bg-gradient-to-br from-[#00F0FF]/10 via-purple-500/10 to-[#10B981]/10 border-[#00F0FF]/30 p-12 backdrop-blur-sm max-w-5xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Icon name="Crown" size={48} className="text-[#00F0FF]" />
          <Icon name="Brain" size={48} className="text-purple-400" />
          <Icon name="Globe" size={48} className="text-[#10B981]" />
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-6">
          АО «Агропромцифра»
        </h3>
        
        <p className="text-2xl text-gray-200 leading-relaxed">
          национальный оператор интеллектуальной экономики АПК и смежных отраслей,
          управляющий данными, ИИ-агентами и цифровыми сервисами на уровне всей страны
        </p>
      </div>
    </Card>

    <div className="grid grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
      <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
        <Icon name="Database" size={40} className="text-[#00F0FF] mx-auto mb-3" />
        <h4 className="font-semibold mb-2">Единые данные</h4>
        <p className="text-sm text-gray-400">Централизованная платформа данных всего АПК</p>
      </Card>
      
      <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
        <Icon name="Bot" size={40} className="text-[#10B981] mx-auto mb-3" />
        <h4 className="font-semibold mb-2">ИИ-агенты</h4>
        <p className="text-sm text-gray-400">Автономное управление процессами</p>
      </Card>
      
      <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
        <Icon name="Network" size={40} className="text-purple-400 mx-auto mb-3" />
        <h4 className="font-semibold mb-2">Экосистема</h4>
        <p className="text-sm text-gray-400">Цифровые сервисы для всех участников</p>
      </Card>
    </div>

    <div className="pt-8">
      <p className="text-xl text-[#00F0FF] font-semibold">
        «Цифровой мозг АПК России»
      </p>
    </div>
  </div>
);

export default Presentation;
