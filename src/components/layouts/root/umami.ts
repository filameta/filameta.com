type PayLoadGenerator = (props: Record<string, unknown>) => Record<string, unknown>;

type UmamiClient = {
    track: (eventName: string | PayLoadGenerator, eventData?: Record<string, unknown>) => void;
}

function getUmami(): UmamiClient | undefined {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    const umami = (window as any).umami;
    if (umami) {
        return umami as UmamiClient;
    }
    return undefined;
}

export const umami = {
    trackPageView: (payload: PayLoadGenerator) => {
        try {
            console.debug("Publishing Umami page view: ", payload({}));
            getUmami()?.track(payload);
        } catch (error) {
            console.warn(error);
        }
    },
    trackEvent: (eventName: string, eventData?: Record<string, unknown>) => {
        try {
            console.debug("Publishing Umami event: ", eventName, eventData);
            getUmami()?.track(eventName, eventData);
        } catch (error) {
            console.warn(error);
        }
    },
}
