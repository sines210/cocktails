


interface ModalOptions<T extends ComponentRef = ComponentRef>{
  component: T;
  componentProps?: componentProps<T>;
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  swipeToClose?: boolean;

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;


/*  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;*/
}