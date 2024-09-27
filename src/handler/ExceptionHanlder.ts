export default abstract class ExceptionHanlder extends Error {
    public static getMessage(exception: ExceptionHanlder): string {
        return exception.message;
    }

    public abstract getStatus(): number;
}