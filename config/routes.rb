Rails.application.routes.draw do
  root'home#index'
  get 'home/beautiful', to: 'home#beautiful'
  get 'home/cars', to: 'home#cars'
  get 'home/municipal', to: 'home#municipal'
  get 'home/outside', to: 'home#outside'
  get 'home/tent', to: 'home#tent'
  get 'home/letters', to: 'home#letters'
  get 'home/base', to: 'home#base'
  get 'home/cashdesks', to: 'home#cashdesks'
  get 'home/knottinghill', to: 'home#knottinghill'
  get 'home/wyndlzzrd', to: 'home#wyndlzzrd'
  get 'home/fences', to: 'home#fences'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
