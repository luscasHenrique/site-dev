import * as Dialog from '@radix-ui/react-dialog';
import { Ring } from '@uiball/loaders';
import { useSelector } from 'react-redux';
import { useLoading } from '../../redux/loading/loadingSlice';

export const Loading = (): JSX.Element => {
  const { loading } = useSelector(useLoading);
  return (
    <>
      {loading && (
        <Dialog.Root open={loading}>
          <Dialog.Portal>
            <Dialog.Overlay
              className="fixed inset-0 bg-modal-overlay"
              style={{ zIndex: 100 }}
            >
              <Dialog.Content className="fixed inset-0 z-1500 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <div
                    className={`relative transform overflow-hidden rounded-lg text-left transition-all sm:w-full md:w-[75px]`}
                  >
                    <Ring size={75} lineWeight={5} speed={2} color="#FEFEFE" />
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
};

export default Loading;
