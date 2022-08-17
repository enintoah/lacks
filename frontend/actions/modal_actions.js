export const MODAL_ON = "MODAL_ON";
export const MODAL_OFF = "MODAL_OFF"

export const openModal = () => {
  return {
    type: MODAL_ON
  }
}

export const closeModal = () => {
  return {
    type: MODAL_OFF
  }
}