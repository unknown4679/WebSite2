import { useTranslation } from 'react-i18next';
import './ConfirmationModal.css';

interface ConfirmationModalProps {
  onClose: () => void;
  product?: string;
  deliveryDate?: string;
}

const ConfirmationModal = ({ 
  onClose, 
  product = 'Cybertruck', 
  deliveryDate = 'Aug 2' 
}: ConfirmationModalProps) => {
  const { t } = useTranslation();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="confirmation-overlay" onClick={handleOverlayClick}>
      <div className="confirmation-box">
        <h1>✅ {t('confirmation.orderConfirmed', 'Order Confirmed!')}</h1>
        <p>
          {t('confirmation.deliveryMessage', 'Your {{product}} will arrive by {{date}}.', {
            product,
            date: deliveryDate
          })}
        </p>
        <p className="powered">
          {t('confirmation.poweredBy', 'Powered by S.P.E.A.R.™')}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationModal;