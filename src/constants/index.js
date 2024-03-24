import { PiWind } from 'react-icons/pi';

export const FORM_INIT_VALUES = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

export const LIMIT = 4;

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const TOASTER_CONFIG = { className: 'themed_toaster', duration: 1500 };

export const FILTERS_EQUIPMENT = [
  {
    name: 'airConditioner',
    value: '1',
    icon: PiWind,
    text: 'AC',
  },
  {
    name: 'transmission',
    value: 'automatic',
    icon: 'icon-transmission',
    text: 'Automatic',
  },
  {
    name: 'kitchen',
    value: '1',
    icon: 'icon-kitchen',
    text: 'Kitchen',
  },
  {
    name: 'TV',
    value: '1',
    icon: 'icon-tv',
    text: 'TV',
  },
  {
    name: 'shower',
    value: '1',
    icon: 'icon-shower',
    text: 'Shower/WC',
  },
];

export const FILTERS_TYPE = [
  {
    value: 'panelTruck',
    icon: 'Van1Icon',
    text: 'Van',
  },
  {
    value: 'fullyIntegrated',
    icon: 'Van2Icon',
    text: 'Fully Integrated',
  },
  {
    value: 'alcove',
    icon: 'Van3Icon',
    text: 'Alcove',
  },
];

export const LOCATION_OPTIONS = [
  { label: 'Kyiv', value: 'Ukraine, Kyiv' },
  { label: 'Lviv', value: 'Ukraine, Lviv' },
  { label: 'Odesa', value: 'Ukraine, Odesa' },
  { label: 'Poltava', value: 'Ukraine, Poltava' },
  { label: 'Dnipro', value: 'Ukraine, Dnipro' },
  { label: 'Kharkiv', value: 'Ukraine, Kharkiv' },
  { label: 'Sumy', value: 'Ukraine, Sumy' },
];
