import {
  BorderAllIcon,
  AlertCircleIcon,
  CircleDotIcon,
  BoxMultiple1Icon,
  AdjustmentsHorizontalIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  SettingsIcon

} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: "Tickets",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  { header: 'Utilities' },
  {
    title: 'Livechat',
    icon: MessageCircleIcon,
    to: '/ui-components/livechat'
  },
  {
    title: 'Customize',
    icon: SettingsIcon,
    to: '/ui-components/custom'
  },
  // load model
  {
    title: 'Training',
    icon: SettingsIcon,
    to: '/ui-components/train'
  },
  {
    title: 'Data',
    icon: SettingsIcon,
    to: '/ui-components/data'
  },
  // chart
  {
    title: 'Analytics',
    icon: MessageCircleIcon,
    to: '/ui-components/analytics'
  }
];

export default sidebarItem;
