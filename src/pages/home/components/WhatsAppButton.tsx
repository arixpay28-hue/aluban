
export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para tendas. Pode me ajudar? 🎪');
    window.open(`https://wa.me/5561982630276?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <i className="ri-whatsapp-fill text-3xl sm:text-4xl"></i>
    </button>
  );
}
