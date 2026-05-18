export function useModalRootClass(wrapperClassName) {
  return wrapperClassName ? `modal ${wrapperClassName}` : 'modal';
}
