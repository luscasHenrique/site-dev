import * as Dialog from '@radix-ui/react-dialog';
import { Close } from '../../assets/icons';

export interface SidebarProps {
  visible: boolean;
  onSetVisible?: (open: boolean) => void;
  content: string | React.ReactNode;
  title: string;
}

export const Sidebar = ({
  visible,
  onSetVisible,
  content,
  title,
}: SidebarProps) => {
  return (
    <Dialog.Root open={visible} onOpenChange={onSetVisible}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-modal-overlay">
          <Dialog.Content className="fixed inset-0 z-10">
            <div
              className="flex h-full items-start justify-end text-center sm:items-center sm:p-0
            md:radix-state-closed:translate-x-[610px]
            md:radix-state-open:translate-x-0 animate-enter-from-right"
            >
              <div
                className="relative z-50 w-full h-full md:w-[610px]
                bg-white font-dmsans shadow-xl rounded-lg"
              >
                <div className="flex py-4 justify-between items-center heading border-b border-[#EEEEEE]">
                  <h3
                    className="flex-1 self-center font-medium text-neutro-b-400
                  text-[24px] p-0 leading-[36px] pl-[40px]"
                  >
                    {title}
                    {/* Meu carrinho */}
                  </h3>
                  <div className=" p-0 pr-[40px]">
                    <Dialog.Close asChild>
                      <img
                        src={Close}
                        className="cursor-pointer"
                        alt="button closer"
                      />
                    </Dialog.Close>
                  </div>
                </div>

                <div className="cart h-full overflow-y-scroll">{content}</div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
